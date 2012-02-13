package controllers;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import aux.Constants;
import aux.html_parser.ParsedProductData;
import aux.html_parser.ProductParser;

import play.mvc.Controller;

public class Products extends Controller {
	
	public static void parseUrl(String url) {
		try {
			renderJSON(new ProductParser().parse(url));
		} catch (Exception e) {
			e.printStackTrace();
			renderJSON(Constants.ERROR_KEY + new Integer(Constants.ERROR_PARSING_FAILED));
		}

		

	}

}
