package utils.tmp;

import java.io.ByteArrayOutputStream;
import java.io.FileWriter;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class GivvyParser {

	public static void main(String[] args) throws Exception {
		GsonBuilder b = new GsonBuilder();
		Gson gson = b.create();

		List<Map<String, String>> base = new ArrayList<Map<String, String>>();

		for (int i = 50; i < 1200; i++) {
			try {
				Map<String, String> p = parseProduct(i);
				base.add(p);
				System.out.println("Added id: " + i);
			} catch (Throwable e) {
				System.out.println("Skipping id: " + i);
			}
		}

		FileWriter writer = new FileWriter("data.json");
		writer.write(gson.toJson(base));
		writer.close();

		System.out.println("Stored: " + base.size());

	}

	private static Map<String, String> parseProduct(int id) throws Exception {
		final String productPageUrl = "http://facebook.givvy.com/product/" + id;

		URL url = new URL(productPageUrl);
		HttpURLConnection connx = (HttpURLConnection) url.openConnection();
		connx.setRequestMethod("GET");
		connx.setRequestProperty("Accept",
				"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");

		connx.setDoInput(true);
		connx.setDoOutput(true);

		InputStream in = connx.getInputStream();
		ByteArrayOutputStream bout = new ByteArrayOutputStream();
		byte buf[] = new byte[1024];
		int n = -1;
		while ((n = in.read(buf)) != -1) {
			bout.write(buf, 0, n);
		}
		in.close();

		Document page = Jsoup.parse(new String(bout.toByteArray()));

		Map<String, String> product = new HashMap<String, String>();
		product.put("id", "" + id);
		product.put("category", parseCategory(page));
		product.put("title", parseTitle(page));
		product.put("story", parseStory(page));
		product.put("price", parsePrice(page));
		product.put("image_url", parseImageUrl(page));

		return product;
	}

	private static String parseImageUrl(Document page) {
		return page.select("img[class=image_border]").first().attr("src");
	}

	private static String parseCategory(Document page) {
		return page.select("div[class=breadcrumbs]").select("a").get(1).text();
	}

	private static String parseTitle(Document page) {
		return page.select("span[style=font-size:14px;font-weight:bold;]").first().text();
	}

	private static String parsePrice(Document page) {
		String text = page.select("div[style=margin-top:10px;font-size:14px;font-weight:bold;]")
				.first().text();
		text = text.trim();
		text = text.substring(7);
		return text;
	}

	private static String parseStory(Document page) {
		String text = page.select("div[class=tile-shadow]").first().text();
		text = text.substring(1);
		text = text.substring(0, text.indexOf("\""));
		return text;
	}

}
