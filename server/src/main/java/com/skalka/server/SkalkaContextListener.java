package com.skalka.server;

import java.util.HashMap;
import java.util.Map;

import org.mybatis.guice.XMLMyBatisModule;
import org.mybatis.guice.datasource.helper.JdbcHelper;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.skalka.server.controllers.IndexController;
import com.skalka.server.controllers.UsersController;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.core.ResourceConfig;
import com.sun.jersey.api.json.JSONConfiguration;
import com.sun.jersey.guice.JerseyServletModule;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;
import com.sun.jersey.spi.container.servlet.ServletContainer;

public class SkalkaContextListener extends GuiceServletContextListener {

	private JerseyServletModule jerseyServletModule = new JerseyServletModule() {
		@Override
		protected void configureServlets() {

			bind(IndexController.class);

			bind(UsersController.class);

			Map<String, String> params = new HashMap<String, String>();
			params.put(PackagesResourceConfig.PROPERTY_PACKAGES, "unbound");
			params.put(JSONConfiguration.FEATURE_POJO_MAPPING, "true");

			params.put(ResourceConfig.FEATURE_REDIRECT, "true");
			params.put(ResourceConfig.FEATURE_IMPLICIT_VIEWABLES, "true");
			params.put(ServletContainer.PROPERTY_WEB_PAGE_CONTENT_REGEX,
					"/(images|css|jsp|html)/.*");
			params.put(ResourceConfig.FEATURE_TRACE, "true");

			serve("/*").with(GuiceContainer.class, params);
		}

	};

	@Override
	protected Injector getInjector() {

		return Guice.createInjector(jerseyServletModule, new XMLMyBatisModule.Builder().create(),
				JdbcHelper.MySQL);
	}
}
