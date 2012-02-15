package controllers;

import models.UserCategories;
import play.mvc.Controller;

public class ActionsController extends Controller {

	public static void all() {

		renderText(UserCategories.count("byUserId", 2L));

	}

}
