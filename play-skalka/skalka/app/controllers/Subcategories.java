package controllers;

import java.util.List;
import java.util.Map;

import models.Subcategory;
import models.SubcategoryWithCategory;
import play.mvc.Controller;

public class Subcategories extends Controller {

	public static void list() {
		Map<String, List<SubcategoryWithCategory>> map = SubcategoryWithCategory.getCategories();
		render(map);
	}

	public static void byUser(Long facebookId) {

		List<Subcategories> c = Subcategory.all().fetch();
		renderJSON(c);
	}
}
