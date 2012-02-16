package controllers;

import java.util.List;

import models.ErrorResult;
import models.User;
import models.UserCategories;
import play.Logger;
import play.cache.Cache;
import play.db.DB;

public class Friends extends Application {

	public static void addCategories(List<Long> catIds) {
		System.out.println("Categories = " + catIds);
		if (catIds == null || catIds.isEmpty()) {
			renderText("Categories are empty");
		}

		User targetUser = Cache.get(session.get(SESSION_PARAM_TARGET_FRIEND), User.class);
		if(targetUser == null){
			renderJSON(new ErrorResult());
		}
		
		for (Long catId : catIds) {
			System.out.println("Adding catId = " + catId + " for userId = " + targetUser.id);
			
			DB.execute("delete from user_subcategories where user_id = " + targetUser.id);
			new UserCategories(targetUser.id, catId).save();
		}

		Application.index(null);
	}

}
