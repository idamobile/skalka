package controllers;

import models.ErrorResult;
import models.User;
import play.libs.WS;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class Friends extends Application {

	public static void pick(Long facebookId) {
		User user = User.findByFacebookId(facebookId);
		if (user == null) {
			try {

				String response = WS.url("http://graph.facebook.com/" + facebookId).get()
						.getString();
				JsonObject obj = new JsonParser().parse(response).getAsJsonObject();
				user = User.fromFbJson(obj);
				user.save();

				obj.addProperty("is_new", true);
				obj.addProperty("error", false);
				renderText(obj.toString());

			} catch (Throwable e) {
				System.out.println(e);
				renderJSON(new ErrorResult(-1, e.getMessage()));
			}

		}

		Gson gson = new GsonBuilder().registerTypeAdapter(User.class, new User.UserSerializer())
				.create();
		JsonObject obj = (JsonObject) gson.toJsonTree(user);
		obj.addProperty("is_new", false);
		obj.addProperty("error", false);

		renderText(obj.toString());
	}
}
