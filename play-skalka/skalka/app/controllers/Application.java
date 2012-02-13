package controllers;

import play.mvc.Before;
import play.mvc.Controller;

public class Application extends Controller {

	@Before
	static void checkConnected() {
		if (!session.contains("user")) {
			// Application.index();
		} else {
			renderArgs.put("user", session.get("user"));
		}
	}

	public static void index() {
		render();
	}

}