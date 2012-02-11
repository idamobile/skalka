package com.skalka.server;

import java.util.HashMap;
import java.util.Map;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.skalka.server.controllers.UsersController;
import com.skalka.server.db.OfflineUsersDaoImpl;
import com.skalka.server.db.UsersDao;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.json.JSONConfiguration;
import com.sun.jersey.guice.JerseyServletModule;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;

public class SkalkaContextListener extends GuiceServletContextListener {

	@Override
	protected Injector getInjector() {

		return Guice.createInjector(new JerseyServletModule() {

			@Override
			protected void configureServlets() {

				bind(UsersController.class);
				bind(UsersDao.class).to(OfflineUsersDaoImpl.class);

				Map<String, String> params = new HashMap<String, String>();
				params.put(PackagesResourceConfig.PROPERTY_PACKAGES, "unbound");
				params.put(JSONConfiguration.FEATURE_POJO_MAPPING, "true");
				serve("/*").with(GuiceContainer.class, params);
			}

		});
	}
}
