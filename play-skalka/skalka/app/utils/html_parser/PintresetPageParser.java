package utils.html_parser;

import java.io.File;
import java.io.IOException;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class PintresetPageParser {
	
	private static final String FILE ="/Users/balivali/tmp/test.html";
	
	public static final void main(String[] args) throws IOException, ClassNotFoundException, SQLException{
		Document doc = Jsoup.parse(new File(FILE), null);
		Elements links = doc.select("p[class=description]");
		HashMap<String, ArrayList<String>> result = new HashMap<String, ArrayList<String>>();
		for(Element e: links){
			String[] data = e.ownText().split(":");
			ArrayList<String> list = result.get(data[0].trim());
			if(list == null){
				list = new ArrayList<String>();
				result.put(data[0].trim(), list);
			}
			list.add(data[1].trim());
		}
		Class.forName("com.mysql.jdbc.Driver");
		// Setup the connection with the DB
		Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/skalka?" + "user=skalka&password=skalka");		
		for(String key : result.keySet()){
			PreparedStatement preparedStatement = connect.prepareStatement("insert into categories values (default, ?, null)");
			preparedStatement.setString(1, key);
			try{
				preparedStatement.execute();
			} catch(Exception e) {
				System.out.println("could not add category:" + key);
			}
			preparedStatement = connect.prepareStatement("insert into subcategories values (default, ?, null, " + key + ")");
			for(String subcat : result.get(key)){
				preparedStatement.setString(1, subcat);
				try{
					preparedStatement.execute();
				} catch(Exception e) {
					System.out.println("could not add subcategory:" + subcat);
				}	
			}
		}
		connect.close();
	}
}
