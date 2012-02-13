package controllers;

import java.io.File;
import java.io.IOException;
import java.util.Date;

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
import aux.Constants;
import aux.html_parser.ProductParser;

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
			@Required Float price, String type) {
		try {

			Product product = new Product(descr, story, imageUrl, null, price, type, new Date());

			String accessToken = Session.current().get(User.JSON_TAG_ACCESS_TOKEN);
			if (accessToken != null) {
				User user = Cache.get(accessToken, User.class);
				if (user != null) {
					product.addedBy = user.facebookId;
				}
			}

			product.image = fetchImage(imageUrl);

			product.save();
			renderText("true");
		} catch (Throwable e) {
			e.printStackTrace();
			renderText("false");
		}
	}

	private static String fetchImage(String url) throws IOException {
		HttpResponse response = WS.url(url).get();

		Blob from = new Blob();
		from.set(response.getStream(), response.getContentType());

		File to = new File(Blob.getStore(), Codec.UUID());

		Images.resize(from.getFile(), to, Constants.PRODUCT_IMAGE_WIDTH, -1);

		return to.getAbsolutePath();
	}

	public static void index() {
		render();
	}

	public static void image(long id) {
		Product p = Product.findById(id);
		renderBinary(new File(p.image));
	}
}
