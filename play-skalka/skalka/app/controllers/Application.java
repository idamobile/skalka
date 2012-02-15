package controllers;

import java.util.List;

import models.Product;
import models.User;
import play.cache.Cache;
import play.mvc.Before;
import play.mvc.Controller;

public class Application extends Controller {

	public static final String SESSION_PARAM_ACCESS_TOKEN = User.JSON_TAG_ACCESS_TOKEN;

	@Before
	static void checkConnected() {
		if (!session.contains(SESSION_PARAM_ACCESS_TOKEN)) {
			Signin.index();
		} else {
			User user = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
			if (user == null) {
				// TODO: ask FB in future to populate cache, for now we make
				// user login again
				Signin.index();
			}
			renderArgs.put("user", user);
		}
	}

	public static void index(Long targetFbId) {
		if (targetFbId == null) {
			// TODO: show friends selector
		}

		List<Product> products = Product.findAll();
		render(products);
	}

	public static void logout() {
		session.remove(User.JSON_TAG_ACCESS_TOKEN);
		index(null);
	}

	public static void profile() {
		render();
	}

}