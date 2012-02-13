package controllers;

import models.User;

import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Parameter;
import com.restfb.types.FacebookType;

public class FbConnector extends Application {

	public static void feed() {

		String accessToken = session.get(User.JSON_TAG_ACCESS_TOKEN);
		if (accessToken == null) {
			renderText("Not authorized");
		}

		FacebookClient fbClient = new DefaultFacebookClient(accessToken);
		FacebookType response = fbClient.publish("me/feed", FacebookType.class,
				Parameter.with("message", "RestFB test"));
		renderText(response.toString());
	}
}
