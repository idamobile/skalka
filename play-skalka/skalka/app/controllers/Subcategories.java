package controllers;

import java.util.List;
import java.util.Map;

import models.Subcategory;
import play.mvc.Controller;

public class Subcategories extends Controller {

	public static void list() {
		Map<String, List<Subcategory>> map = Subcategory.getCategories(); 
		render(map);
	}

}
