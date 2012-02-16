package controllers;

import java.io.File;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import models.ErrorResult;
import models.Product;
import models.ProductsList;
import models.User;
import play.Logger;
import play.cache.Cache;
import play.data.validation.Required;
import play.db.DB;
import play.db.jpa.Blob;
import play.libs.Codec;
import play.libs.Images;
import play.libs.WS;
import play.libs.WS.HttpResponse;
import play.mvc.Controller;
import play.mvc.Scope.Session;
import utils.Constants;
import utils.html_parser.ProductParser;

public class Products extends Controller {

	public static void parseUrl(String url) {
		try {
			renderJSON(new ProductParser().parse(url));
		} catch (Exception e) {
			e.printStackTrace();
			renderJSON(new ErrorResult(Constants.ERROR_PARSING_FAILED, e.getMessage()));
		}
	}

	public static void add(String descr, String story, @Required String imageUrl, @Required String price, String type) {
		try {

			Logger.warn(Arrays.toString(new String[] { descr, story, imageUrl, "" + price, type }));

			
			
			Product product = new Product(descr, story, imageUrl, null, type, new Date());
			setPrice(product, price);
			
			String accessToken = Session.current().get(User.JSON_TAG_ACCESS_TOKEN);
			if (accessToken != null) {
				User user = Cache.get(accessToken, User.class);
				if (user != null) {
					product.addedBy = user.facebookId;
				}
			}

			fetchImage(product, imageUrl);

			product.save();
			renderText("true");
		} catch (Throwable e) {
			e.printStackTrace();
			renderText("false");
		}
	}
	
	private static void setPrice(Product product, String unparsedPrice){
		Pattern DECIMAL = Pattern.compile("(\\d+\\.?\\d*)");
		Pattern CURRENCY = Pattern.compile("(\\$|£|€|¥)");
		Matcher decimalMatcher = DECIMAL.matcher(unparsedPrice);
		if(decimalMatcher.find()){
			product.price = Float.parseFloat(decimalMatcher.group(1));
		}
		Matcher currencyMatcher = CURRENCY.matcher(unparsedPrice);
		if(currencyMatcher.find()){
			product.currency = currencyMatcher.group(1);
		}
	}

	private static String fetchImage(Product product, String url) throws IOException {
		HttpResponse response = WS.url(url).get();

		Blob from = new Blob();
		from.set(response.getStream(), response.getContentType());

		File toInFeed = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInFeed, Constants.PRODUCT_IMAGE_IN_FEED, -1);
		product.imageFeed = toInFeed.getAbsolutePath();

		File toInDetails = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInDetails, Constants.PRODUCT_IMAGE_IN_PROD_DETAILS, -1);
		product.imageDetails = toInDetails.getAbsolutePath();

		File toInList = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInList, Constants.PRODUCT_IMAGE_IN_LIST, -1);
		product.imageList = toInList.getAbsolutePath();

		return toInFeed.getAbsolutePath();
	}

	public static void index() {
		render();
	}

	public static void imageFeed(long id) {
		Product p = Product.findById(id);
		renderBinary(new File(p.imageFeed));
	}

	public static void imageDetails(long id) {
		Product p = Product.findById(id);
		renderBinary(new File(p.imageDetails));
	}

	public static void imageList(long id) {
		Product p = Product.findById(id);
		renderBinary(new File(p.imageList));
	}

	public static void list(int page) {
		page = (page <= 0) ? 1 : page;

		int startIndex = (page - 1) * Constants.PRODUCTS_PAGE_SIZE;
		List<Product> products = Product.all().from(startIndex).fetch(Constants.PRODUCTS_PAGE_SIZE);
		render(products);
	}

	public static void details(Long id, boolean fromList) {
		Product product = Product.findById(id);
		render(product, fromList);
	}
}
