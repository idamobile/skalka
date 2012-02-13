package controllers;

import java.util.Date;

import models.ErrorResult;
import models.Product;
import models.User;
import play.cache.Cache;
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

	public static void add(String descr, String story, String imageUrl, String price, String type) {
		try {

			Product product = new Product(descr, story, imageUrl, null, price == null ? -1.0f
					: Float.parseFloat(price), type, new Date());

			String accessToken = Session.current().get(User.JSON_TAG_ACCESS_TOKEN);
			if (accessToken != null) {
				User user = Cache.get(accessToken, User.class);
				if (user != null) {
					product.addedBy = user.facebookId;
				}
			}

			product.save();
			renderText("true");
		} catch (Throwable e) {
			e.printStackTrace();
			renderText("false");
		}
	}

	public static void index() {
		render();
	}
}
