package com.skalka.server;

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

		System.out.println(service.getByUid("1"));

	}
}
