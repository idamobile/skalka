package controllers;

import java.util.List;

import models.ErrorResult;
import models.User;
import models.UserCategories;
import play.cache.Cache;
import play.db.DB;

public class Friends extends Application {

	public static void addCategories(List<Long> catIds) {
		if (catIds == null || catIds.isEmpty()) {
			renderText("Categories are empty");
		}

		User targetUser = Cache.get(session.get(SESSION_PARAM_TARGET_FRIEND), User.class);
		if (targetUser == null) {
			renderJSON(new ErrorResult());
		}

		DB.execute("delete from user_subcategories where user_id = " + targetUser.id);
		for (Long catId : catIds) {
			new UserCategories(targetUser.id, catId).save();
		}

		Application.index(null, false);
	}

}
