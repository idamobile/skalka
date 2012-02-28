package controllers;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import models.Product;
import play.Logger;
import play.db.jpa.Blob;
import play.libs.Codec;
import play.libs.Images;
import play.libs.WS;
import play.libs.WS.HttpResponse;
import play.mvc.Controller;
import utils.Constants;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class Test extends Controller {

	public static void index() {
		try {
			String fname = Blob.getStore().getAbsolutePath() + "/givvy.json";
			Type type = new TypeToken<List<Map<String, String>>>() {
			}.getType();

			List<Map<String, String>> data = new Gson().fromJson(new FileReader(fname), type);

			Logger.warn("Storing " + data.size() + " products");

			for (Map<String, String> p : data) {

				try {
					add(p.get("title"), p.get("story"), p.get("image_url"), p.get("price"),
							p.get("product_url"));

					Logger.warn("added: " + p);
				} catch (Throwable t) {
					Logger.error(t, "Unable to store product");
				}

			}

			Logger.warn("done");
		} catch (Exception e) {
			renderText("error");
		}
		renderText("done");
	}

	private static void add(String descr, String story, String imageUrl, String price,
			String productUrl) throws IOException {

		Product product = new Product(descr, story, imageUrl, null, "image", new Date());
		product.productUrl = productUrl;
		setPrice(product, price);
		Random r = new Random(System.currentTimeMillis());
		product.addedBy = r.nextLong() % 5;
		fetchImage(product, imageUrl);

		product.save();

	}

	private static void setPrice(Product product, String unparsedPrice) {
		Pattern DECIMAL = Pattern.compile("(\\d+\\.?\\d*)");
		Pattern CURRENCY = Pattern.compile("(\\$|£|€|¥)");
		Matcher decimalMatcher = DECIMAL.matcher(unparsedPrice);
		if (decimalMatcher.find()) {
			product.price = Float.parseFloat(decimalMatcher.group(1));
		}
		Matcher currencyMatcher = CURRENCY.matcher(unparsedPrice);
		if (currencyMatcher.find()) {
			product.currency = currencyMatcher.group(1);
		}
	}

	private static String fetchImage(Product product, String url) throws IOException {
		HttpResponse response = WS.url(url).get();

		Blob from = new Blob();
		from.set(response.getStream(), response.getContentType());

		File toInFeed = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInFeed, Constants.PRODUCT_IMAGE_IN_FEED, -1);
		product.imageFeed = toInFeed.getName();

		File toInDetails = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInDetails, Constants.PRODUCT_IMAGE_IN_PROD_DETAILS, -1);
		product.imageDetails = toInDetails.getName();

		File toInList = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInList, Constants.PRODUCT_IMAGE_IN_LIST, -1);
		product.imageList = toInList.getName();

		return toInFeed.getName();
	}

}
