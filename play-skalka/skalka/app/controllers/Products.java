package controllers;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import models.ErrorResult;
import models.Product;
import models.User;
import play.cache.Cache;
import play.data.validation.Required;
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

	public static void add(String descr, String story, @Required String imageUrl,
			@Required Float price, String type, List<Long> subcategoryId) {
		try {

			Product product = new Product(descr, story, imageUrl, null, price, type, new Date(),
					subcategoryId);

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
}
