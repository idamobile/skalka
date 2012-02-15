package controllers;

import java.util.List;
import java.util.Map;

import models.Category;
import models.ProductsList;
import models.Subcategory;
import models.User;
import models.UserCategories;
import play.cache.Cache;
import play.mvc.Before;
import play.mvc.Controller;
import utils.Constants;

public class Application extends Controller {

	public static final String SESSION_PARAM_ACCESS_TOKEN = User.JSON_TAG_ACCESS_TOKEN;
	public static final String SESSION_PARAM_TARGET_FRIEND = "targetFbId";
	public static final String SESSION_PARAM_CURRENT_LIST = "currentList";

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
				renderArgs.put("showFriendsSelector", true);
				render();
			} else {
				targetFbId = new Long(storedFbId);
			}
		}
		session.put(SESSION_PARAM_TARGET_FRIEND, targetFbId);

		User targetUser = User.ensureUser(targetFbId);
		if (targetUser == null) {
			// TODO: render error
			renderText("Friend does not exist in db and could not be fetched from FB");
		}
		Cache.add(session.get(SESSION_PARAM_TARGET_FRIEND), targetUser, Constants.CACHE_TIMEOUT);

		if (UserCategories.count("byUserId", targetUser.id) == 0) {
			Application.profile();
		} else {
			User ownerUser = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
			ProductsList list = ProductsList.fetchLatest(ownerUser.id, targetUser.id);
			if (list == null) {
				list = new ProductsList("Gift for " + targetUser.firstName, ownerUser.id, targetUser.id);
				list.save();
			}
			redirect("/lists/" + list.id);
		}

	}

	public static void logout() {
		session.remove(SESSION_PARAM_ACCESS_TOKEN, SESSION_PARAM_TARGET_FRIEND);
		index(null);
	}

	public static void profile() {
		Map<Category, List<Subcategory>> categories = Subcategory.getTree();
		User user = Cache.get(session.get(SESSION_PARAM_TARGET_FRIEND), User.class);
		render(categories, user);
	}

}