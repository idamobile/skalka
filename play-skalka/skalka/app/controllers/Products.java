package controllers;

import java.util.HashMap;
import java.util.Map;

import play.mvc.Controller;

public class Products extends Controller {

	public static void parseUrl(String url) {
		Map<String, String> testResponse = new HashMap<String, String>();

		testResponse.put("url", url);
		testResponse.put("myKey", "myValue");

		renderJSON(testResponse);
	}

	public static void add(String descr, String story) {

	}

}
