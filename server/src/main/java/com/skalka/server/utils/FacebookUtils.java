package com.skalka.server.utils;

import java.net.URI;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.client.utils.URIUtils;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.message.BasicNameValuePair;

public class FacebookUtils {

	public static final String FB_APP_ID = "171637879615808";
	public static final String FB_APP_SECRET = "2669216a38b801dbcbd17db7aefc1791";

	public static final String HTTP_SCHEMA = "https";
	public static final String HOSTNAME = "graph.facebook.com";
	public static final String ACCESS_TOKEN_PATH = "oauth/access_token";

	public static String getImageUrl(String facebookId) {
		return String.format("http://graph.facebook.com/%s/picture", facebookId);
	}

	public static String getOAuthDialogURL(String callbackUrl) {
		return String.format("https://www.facebook.com/dialog/oauth?client_id=%s&redirect_uri=%s",
				FB_APP_ID, callbackUrl);
	}

	public static URI getAccessTokenRequest(String code, String redirectUri) {
		try {
			List<NameValuePair> params = new ArrayList<NameValuePair>();
			params.add(new BasicNameValuePair("client_id", FB_APP_ID));
			params.add(new BasicNameValuePair("redirect_uri", URLEncoder.encode(redirectUri,
					"UTF-8")));
			params.add(new BasicNameValuePair("client_secret", FB_APP_SECRET));
			params.add(new BasicNameValuePair("code", code));

			return URIUtils.createURI(HTTP_SCHEMA, HOSTNAME, -1, ACCESS_TOKEN_PATH,
					URLEncodedUtils.format(params, "UTF-8"), null);

		} catch (Exception e) {
			return null;
		}
	}

	// public static URI getMyInfoRequest(String )

}
