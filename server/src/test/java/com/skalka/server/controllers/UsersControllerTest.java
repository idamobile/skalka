package com.skalka.server.controllers;

import java.util.Date;

import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.mybatis.guice.XMLMyBatisModule;
import org.mybatis.guice.datasource.helper.JdbcHelper;

import com.google.inject.Binder;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Module;
import com.skalka.server.domain.User;

public class UsersControllerTest {

	private static Injector injector;
	private static UsersController usersController;

	@BeforeClass
	public static void createInjector() {
		injector = Guice.createInjector(new Module() {

			@Override
			public void configure(Binder binder) {

				binder.bind(UsersController.class);
			}

		}, JdbcHelper.MySQL, new XMLMyBatisModule.Builder().create());

		usersController = injector.getInstance(UsersController.class);
	}

	@Test
	public void testAddUser() {
		User user = usersController.findByFacebookId("15");
		if (user != null) {
			usersController.deleteByFacebookId(user.getFacebookId().toString());
		}
		String uid = usersController.add("15", "Paul", "Simon", new Date(), "male");
		Assert.assertNotNull(uid);

		usersController.deleteByUid(uid);
	}
}
