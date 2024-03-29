package controllers;

import java.util.List;
import java.util.Map;

import models.Category;
import models.ProductsList;
import models.Subcategory;
import models.User;
import models.UserCategories;
import play.Logger;
import play.cache.Cache;
import play.mvc.Before;
import play.mvc.Controller;
import utils.Constants;

public class Application extends Controller {

	public static final String SESSION_PARAM_ACCESS_TOKEN = User.JSON_TAG_ACCESS_TOKEN;
	public static final String SESSION_PARAM_TARGET_FRIEND = "targetFbId";
	public static final String SESSION_PARAM_CURRENT_LIST = "currentList";
	public static final String SESSION_PARAM_CURRENT_PRODUCT = "currentProduct";

	@Before
	static void checkConnected() {
		if (!session.contains(SESSION_PARAM_ACCESS_TOKEN)) {
			clearCookies();
			Signin.index();
		} else {
			User user = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
			if (user == null) {
				// TODO: ask FB in future to populate cache, for now we make
				// user login again
				clearCookies();
				Signin.index();
			}

			if (session.contains(SESSION_PARAM_TARGET_FRIEND)) {
				renderArgs.put("targetFbId", session.get(SESSION_PARAM_TARGET_FRIEND));
			}

			renderArgs.put("user", user);
		}
	}

	public static void index(Long targetFbId, boolean createNewList, String occasion) {
		Logger.warn("occassion = " + occasion);
		User ownerUser = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
		User targetUser = null;

		if (targetFbId == null) {
			if (createNewList) {
				Logger.warn("New friend has to be selected - 1");
				renderArgs.put("showFriendsSelector", true);
				render();
			}

			String storedFbId = session.get(SESSION_PARAM_TARGET_FRIEND);
			if (storedFbId == null || !storedFbId.matches("[0-9]+")) {

				ProductsList lastList = ProductsList.fetchLatest(ownerUser.id);

				Logger.warn("No target user was saved. Last list is: " + lastList);

				if (lastList != null) {
					targetUser = User.findById(lastList.targetId);
					targetFbId = targetUser.facebookId;
				} else {
					Logger.warn("New friend has to be selected - 2");
					renderArgs.put("showFriendsSelector", true);
					render();
				}
			} else {
				targetFbId = new Long(storedFbId);
			}
		}
		session.put(SESSION_PARAM_TARGET_FRIEND, targetFbId);
		Logger.warn("Saving target FB ID: " + targetFbId);

		targetUser = User.ensureUser(targetFbId);
		if (targetUser == null) {
			// TODO: render error
			renderText("Friend does not exist in db and could not be fetched from FB");
		}
		Cache.add(session.get(SESSION_PARAM_TARGET_FRIEND), targetUser, Constants.CACHE_TIMEOUT);

		if (UserCategories.count("byUserId", targetUser.id) == 0) {
			Application.profile(occasion);
		} else {
			ProductsList list = ProductsList.fetchLatest(ownerUser.id, targetUser.id);
			if (createNewList || list == null) {
				Lists.create(occasion);
			}
			Lists.listIndex(list.id);
		}

	}

	public static void logout() {
		clearCookies();
		index(null, false, null);
	}

	private static void clearCookies() {
		session.remove(SESSION_PARAM_ACCESS_TOKEN);
		session.remove(SESSION_PARAM_TARGET_FRIEND);
		session.remove(SESSION_PARAM_CURRENT_LIST);
	}

	public static void profile(String occasion) {

		User targetUser = Cache.get(session.get(SESSION_PARAM_TARGET_FRIEND), User.class);
		Map<Category, List<Subcategory>> categories = Subcategory.getTree(targetUser);

		render(categories, targetUser, occasion);
	}

}