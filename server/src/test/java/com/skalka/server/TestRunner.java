package com.skalka.server;

import java.util.Date;

import org.mybatis.guice.XMLMyBatisModule;
import org.mybatis.guice.datasource.helper.JdbcHelper;

import com.google.inject.Binder;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Module;
import com.skalka.server.controllers.UsersController;

public class TestRunner {

	public static void main(String[] args) {
		Injector injector = Guice.createInjector(new Module() {

			@Override
			public void configure(Binder binder) {

				binder.bind(UsersController.class);
			}

		}, JdbcHelper.MySQL, new XMLMyBatisModule.Builder().create());

		UsersController service = injector.getInstance(UsersController.class);

		System.out.println("Number of users: " + service.count());
		service.deleteByFacebookId("23");

		System.out.println("Just added: " + service.add("23", "Paul", "Simon", new Date(), "male"));

		service.update("23", "Jersey", "Smith", new Date(), "female");

		System.out.println(service.getByUid("1"));

	}
}
