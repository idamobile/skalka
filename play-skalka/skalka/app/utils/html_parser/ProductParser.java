package utils.html_parser;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringEscapeUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import utils.Pair;


public class ProductParser {

	private final static String POUND_SYMBOL = "£";
	private final static String POUND_HTML = "&pound;";
	private final static String DOLLAR_SYMBOL = "$";
	private final static String DOLLAR_HTML = "\\$";

	private static final HashMap<String, String> CURRENCIES = new HashMap<String, String>();

	static {
		CURRENCIES.put(POUND_SYMBOL, POUND_HTML);
		CURRENCIES.put(DOLLAR_SYMBOL, DOLLAR_HTML);
	}

	private ParsedProductData productData = new ParsedProductData();

	public ParsedProductData parse(String pageUrl) throws IOException, URISyntaxException {
		productData = new ParsedProductData();
		Document doc = Jsoup.connect(pageUrl).userAgent("Mozilla").get();
		parseImages(doc);
		parsePrice(doc);
		parseName(doc);
		return productData;
	}

	private ParsedProductData parseImages(Document doc) {
		ArrayList<Pair<URL, Integer>> images = parseEbayImages(doc);
		if (images.size() == 0) {
			images = parseAmazonImages(doc);
		}
		Collections.sort(images, new Comparator<Pair<URL, Integer>>() {
			@Override
			public int compare(Pair<URL, Integer> lhs, Pair<URL, Integer> rhs) {
				return rhs.snd.compareTo(lhs.snd);
			}
		});
		for (Pair<URL, Integer> p : images) {
			productData.addImageUrl(p.fst);
		}
		return productData;
	}

	private ArrayList<Pair<URL, Integer>> parseAmazonImages(Document doc) {
		ArrayList<Pair<URL, Integer>> images = new ArrayList<Pair<URL, Integer>>();
		Elements links = doc.select("img[src]");
		for (int i = 0; i < links.size(); i++) {
			try {
				URL url = new URL(links.get(i).attr("src"));
				URLConnection conn = url.openConnection();
				images.add(new Pair<URL, Integer>(url, conn.getContentLength()));
			} catch (Exception e) {
			}
			;
		}
		return images;
	}

	private ArrayList<Pair<URL, Integer>> parseEbayImages(Document doc) {
		ArrayList<Pair<URL, Integer>> images = new ArrayList<Pair<URL, Integer>>();
		Elements links = doc.select("span[content~=(?i)\\.(png|jpe?g)]");
		for (int i = 0; i < links.size(); i++) {
			try {
				// System.out.println(links.get(i).attr("content"));
				URL url = new URL(links.get(i).attr("content"));
				URLConnection conn = url.openConnection();
				images.add(new Pair<URL, Integer>(url, conn.getContentLength()));
			} catch (Exception e) {
			}
			;
		}
		return images;
	}

	private ParsedProductData parsePrice(Document doc) {
		Elements links = doc.select(":matchesOwn(" + "(\\$\\d+)|(£\\d+))");
		Pattern CURRENCY_PATTERN = Pattern.compile("(" + POUND_HTML + "\\d+\\.?\\d*)|(" + DOLLAR_HTML
				+ "\\d+\\.?\\d*)");
		for (int i = 0; i < links.size(); i++) {
			for (Iterator<Attribute> it = links.get(i).attributes().iterator(); it.hasNext();) {
				Attribute a = it.next();
				if (a.getValue().matches("price|buyable")) {
					Matcher m = CURRENCY_PATTERN.matcher(links.get(i).toString());
					if (m.find()) {
						String price = m.group(1);
						if (price == null) {
							price = m.group(2);
						}
						productData.setPrice(StringEscapeUtils.unescapeHtml(price));
						return productData;
					}
				}
			}
		}
		return productData;
	}

	private ParsedProductData parseName(Document doc) {
		Elements links = doc.select("h1");
		String res;
		for (int i = 0; i < links.size(); i++) {
			if ((res = parseName(links.get(i))) != null) {
				productData.setName(res);
				return productData;
			}
		}
		links = doc.select("meta[property~=description]");
		if (links.size() > 0) {
			productData.setName(links.get(0).attr("content"));
		}
		return productData;
	}

	private final String parseName(Element element) {
		if (element.children().size() == 0) {
			return element.ownText();
		}
		String res;
		for (Element e : element.children()) {
			if ((res = parseName(e)) != null) {
				return res;
			}
		}
		return null;
	}

	public static final void main(String[] args) throws IOException, URISyntaxException {
		ProductParser parser = new ProductParser();
		System.out.println(parser.parse("http://www.ebay.co.uk/itm/Sexy-womens-Lingerie-Thongs-G-string-Panties-One-Size-XS-M-UK-4-12-/220954252812?pt=UK_Women_s_Lingerie&var=&hash=item7916817248"));
	}
}
