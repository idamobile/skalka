package controllers;

import java.util.List;

import models.User;
import models.UserCategories;
import play.Logger;
import play.cache.Cache;

public class Friends extends Application {

	public static void addCategories(List<Long> catIds) {

		if (catIds == null || catIds.isEmpty()) {
			renderText("Categories are empty");
		}

		User targetUser = Cache.get(session.get(SESSION_PARAM_TARGET_FRIEND), User.class);

		for (Long catId : catIds) {
			Logger.debug("Adding catId = %s for userId = %s", "" + catId, "" + targetUser.id);
			targetUser.subcategoryId = catIds;
			targetUser.save();
			//new UserCategories(targetUser.id, catId).save();
		}

		Application.index(null);
	}

}
