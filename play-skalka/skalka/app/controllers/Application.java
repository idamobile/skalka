package controllers;

import java.util.List;
import java.util.Map;

import models.Category;
import models.Subcategory;
import models.User;
import models.UserCategories;
import play.cache.Cache;
import play.mvc.Before;
import play.mvc.Controller;

public class Application extends Controller {

	public static final String SESSION_PARAM_ACCESS_TOKEN = User.JSON_TAG_ACCESS_TOKEN;
	public static final String SESSION_PARAM_TARGET_FRIEND = "targetFbId";

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
			String storedFbId = session.get(SESSION_PARAM_TARGET_FRIEND);
			if (storedFbId == null || !storedFbId.matches("[0-9]+")) {
				// TODO: show friends selector
				Lists.index();// TODO: remove this in future
			} else {
				targetFbId = new Long(storedFbId);
			}
		}
		session.put(SESSION_PARAM_TARGET_FRIEND, targetFbId);

		User user = User.ensureUser(targetFbId);
		if (user == null) {
			// TODO: render error
			renderText("Friend does not exist in db and could not be fetched from FB");
		}

		if (UserCategories.count("byUserId", user.id) == 0) {
			Application.profile();
		}

		// Target user exists, categories are set, redirecting to list
		Lists.index();
	}

	public static void logout() {
		session.remove(SESSION_PARAM_ACCESS_TOKEN, SESSION_PARAM_TARGET_FRIEND);
		index(null);
	}

	public static void profile() {
		Map<Category, List<Subcategory>> categories = Subcategory.getTree();

		System.out.println(categories);

		render(categories);
	}

}