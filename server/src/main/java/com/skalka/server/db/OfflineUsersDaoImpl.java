package com.skalka.server.db;

import java.math.BigInteger;

import com.skalka.server.domain.User;

public class OfflineUsersDaoImpl implements UsersDao {

	@Override
	public User findByFacebookId(String facebookId) {
		User user = new User();
		user.setFacebookId(new BigInteger(facebookId));
		user.setFirstName("Sergey");
		user.setLastName("Royz");
		return user;
	}

}
