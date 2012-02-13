package controllers;

import play.mvc.Before;
import play.mvc.Controller;

public class Application extends Controller {

	@Before
	static void checkConnected() {
		if (!session.contains("user")) {
			Signin.index();
		} else {
			renderArgs.put("user", session.get("user"));
		}
	}

	public static void index() {
		render();
	}

	public static void logout() {
		session.remove("user");
		index();
	}

}