package com.skalka.server.utils;

public class FacebookUtils {

	public static String getImageUrl(String facebookId) {
		return String.format("http://graph.facebook.com/%s/picture", facebookId);
	}
}
