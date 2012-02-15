package controllers;

import java.util.List;

import models.ProductsList;
import play.mvc.Controller;

public class ActionsController extends Controller {

	public static void all() {
		List<ProductsList> all = ProductsList.all().fetch();

		renderJSON(all);
	}

}
