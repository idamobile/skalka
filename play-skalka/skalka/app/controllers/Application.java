package controllers;

import models.User;
import play.cache.Cache;
import play.mvc.Before;
import play.mvc.Controller;

public class Application extends Controller {

	@Before
	static void checkConnected() {
		if (!session.contains(User.JSON_TAG_ACCESS_TOKEN)) {
			Signin.index();
		} else {
			renderArgs.put("user", Cache.get(session.get(User.JSON_TAG_ACCESS_TOKEN)));
		}
	}

	public static void index() {
		render();
	}

	public static void logout() {
		session.remove(User.JSON_TAG_ACCESS_TOKEN);
		index();
	}

}