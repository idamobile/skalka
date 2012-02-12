package com.skalka.server.html_parser;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.sun.tools.javac.util.Pair;

public class ProductParser {
	
	private final static String CURRENCY_SYMBOL = "£";
	private final static String CURRENCY_HTML = "&pound;";
	private final static Pattern CURRENCY_PATTERN = Pattern.compile(CURRENCY_HTML + "(\\d+\\.?\\d*)");

	
	public static ProductData parse(String pageUrl) throws IOException, URISyntaxException{
		ProductData data = new ProductData();
		Document doc = Jsoup.connect(pageUrl)
				  .userAgent("Mozilla")
				  .get();
		setImages(data, doc);
		getPrice(data, doc);
		getName(data, doc);
		
		return data;
	}
	
	private static ProductData setImages(ProductData prodData, Document doc){
		ArrayList<Pair<URL, Integer>> images = getEbayImages(doc);
		if(images.size() == 0){
			images = getAmazonImages(doc);
		}
		Collections.sort(images, new Comparator<Pair<URL, Integer>>() {
			@Override
			public int compare(Pair<URL, Integer> lhs, Pair<URL, Integer> rhs) {
				return rhs.snd.compareTo(lhs.snd);
			}
		});
		for(Pair<URL, Integer> p : images){
			prodData.addImageUrl(p.fst);
		}
		return prodData;
	}
	
	private static ArrayList<Pair<URL, Integer>> getAmazonImages(Document doc){
		ArrayList<Pair<URL, Integer>> images = new ArrayList<Pair<URL,Integer>>();
		Elements links = doc.select("img[src]");
		for(int i=0;i<links.size(); i++){
			try{
				URL url = new URL(links.get(i).attr("src"));
				URLConnection conn = url.openConnection();
				images.add(new Pair<URL, Integer>(url, conn.getContentLength()));
			} catch(Exception e){};
		}
		return images;
	}
	
	private static ProductData getPrice(ProductData data, Document doc){
		Elements links = doc.select(":matchesOwn(" + CURRENCY_SYMBOL + "\\d+)");
		for(int i=0;i<links.size(); i++){
			for(Iterator<Attribute> it = links.get(i).attributes().iterator() ; it.hasNext(); ){
				Attribute a = it.next();
				if(a.getValue().contains("price")){
					Matcher m = CURRENCY_PATTERN.matcher(links.get(i).toString());
					if (m.find()) {
						data.setPrice(Double.parseDouble(m.group(1)));
						return data;
					}	
				}
			}
		}
		return data;
	}
	
	private static ProductData getName(ProductData data, Document doc){
		Elements links = doc.select("h1");
		String res;
		for(int i=0;i<links.size(); i++){
			if((res=getName(links.get(i))) != null){
				data.setName(res);
				return data;
			}
		}
		return data;
	}
	
	private static final String getName(Element element){
		if(element.children().size() == 0){
			return element.ownText();
		}
		String res;
		for(Element e : element.children()){
			if((res=getName(e)) != null){
				return res;
			}
		}
		return null;
	}
	
	private static ArrayList<Pair<URL, Integer>> getEbayImages(Document doc){
		ArrayList<Pair<URL, Integer>> images = new ArrayList<Pair<URL,Integer>>();
		Elements links = doc.select("span[content~=(?i)\\.(png|jpe?g)]");
		for(int i=0;i<links.size(); i++){
			try{
				//System.out.println(links.get(i).attr("content"));
				URL url = new URL(links.get(i).attr("content"));
				URLConnection conn = url.openConnection();
				images.add(new Pair<URL, Integer>(url, conn.getContentLength()));
			} catch(Exception e){};
		}
		return images;
	}
		
	public static final void main(String[] args) throws IOException, URISyntaxException{
		System.out.println(ProductParser.parse("http://www.amazon.co.uk/Pentax-X90-Digital-Camera-Metallic/dp/B0035WT7ZY/ref=sr_1_1?s=electronics&ie=UTF8&qid=1328995859&sr=1-1"));
	}
}
