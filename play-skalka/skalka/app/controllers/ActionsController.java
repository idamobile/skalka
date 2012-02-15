package controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import models.Category;
import models.Subcategory;
import play.mvc.Controller;

public class ActionsController extends Controller {

	public static void all() {

		List<Subcategory> cats = Subcategory.all().fetch();

		Map<Category, List<Subcategory>> c = new HashMap<Category, List<Subcategory>>();

		for (Subcategory sub : cats) {
			if (!c.containsKey(sub.category)) {
				c.put(sub.category, new ArrayList<Subcategory>());
			}
			c.get(sub.category).add(sub);
		}

		renderJSON(c);

	}

}
