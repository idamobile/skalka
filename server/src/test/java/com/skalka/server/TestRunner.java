package com.skalka.server;

import com.skalka.server.controllers.FacebookController;

public class TestRunner {

	public static void main(String[] args) {
		FacebookController fbCtrl = new FacebookController();

		fbCtrl.authorize(null, null);
	}
}
