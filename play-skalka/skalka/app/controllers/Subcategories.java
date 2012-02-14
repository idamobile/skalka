package controllers;

import java.util.List;
import java.util.Map;

import models.SubcategoryWithCategory;
import play.mvc.Controller;

public class Subcategories extends Controller {

	public static void list() {
		Map<String, List<SubcategoryWithCategory>> map = SubcategoryWithCategory.getCategories(); 
		render(map);
	}

}
