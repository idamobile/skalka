package utils.tmp;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import utils.Pair;

public class PintresetPageParser {
	
	private static final String FILE ="http://pinterest.com/ilnem/categories?page=2";
	
	public static final void main(String[] args) throws IOException, ClassNotFoundException, SQLException{
		Document doc = Jsoup.connect(FILE).get();
		Elements links = doc.select("p[class=description]");
		HashMap<String, ArrayList<Pair<String,String>>> result = new HashMap<String, ArrayList<Pair<String, String>>>();
		for(Element e: links){
			String[] data = e.ownText().split(":");
			ArrayList<Pair<String, String>> list = result.get(data[0].trim());
			if(list == null){
				list = new ArrayList<Pair<String, String>>();
				result.put(data[0].trim(), list);
			}
			list.add(new Pair(data[1].trim(), e.siblingElements().get(1).child(0).attr("src")));
		}
		
		Class.forName("com.mysql.jdbc.Driver");
		// Setup the connection with the DB
		Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/skalka?" + "user=skalka&password=skalka");		
		for(String key : result.keySet()){
			Statement statement = connect.createStatement();
			ResultSet catResult = statement.executeQuery("select id from categories where name='"+key+"'");
			PreparedStatement preparedStatement;
			long categoryId;
			if(!catResult.next()){
				preparedStatement = connect.prepareStatement("insert into categories values (default, ?, 'http://www.google.com')", Statement.RETURN_GENERATED_KEYS);
				preparedStatement.setString(1, key);
				categoryId = 0;
				try{
					preparedStatement.execute();
					ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
			        if (generatedKeys.next()) {
			            categoryId = generatedKeys.getLong(1);
			        } else {
			            throw new SQLException("Creating user failed, no generated key obtained.");
			        }
				} catch(Exception e) {
					e.printStackTrace();
					System.out.println("could not add category:" + key);
				}
			
			} else {
				categoryId = catResult.getLong(1);
			}
			statement.close();
			preparedStatement = connect.prepareStatement("insert into subcategories values (default, ?, ?, ?)");
			for(Pair<String,String> subcat : result.get(key)){
				preparedStatement.setString(1, subcat.fst);
				preparedStatement.setString(2, subcat.snd);
				preparedStatement.setLong(3, categoryId);
				try{
					preparedStatement.execute();
				} catch(Exception e) {
					e.printStackTrace();
					System.out.println("could not add subcategory:" + subcat);
				}	
			}
		}
		connect.close();
	}
}
