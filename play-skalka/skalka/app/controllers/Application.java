package controllers;

import java.util.List;

import models.Product;
import models.User;
import play.cache.Cache;
import play.mvc.Before;
import play.mvc.Controller;

public class Application extends Controller {

	@Before
	static void checkConnected() {
		if (!session.contains(User.JSON_TAG_ACCESS_TOKEN)) {
			// Signin.index();
		} else {
			User user = Cache.get(session.get(User.JSON_TAG_ACCESS_TOKEN), User.class);
			if (user == null) {
				// TODO: ask FB in future to populate cache, for now we make
				// user login again
				// Signin.index();
			}
			renderArgs.put("user", user);
		}
	}

	public static void index() {
		List<Product> products = Product.findAll();
		render(products);
	}

	public static void logout() {
		session.remove(User.JSON_TAG_ACCESS_TOKEN);
		index();
	}

}