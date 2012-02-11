package com.skalka.server.db;

import com.skalka.server.domain.User;

public interface UsersDao {

	User findByFacebookId(String facebookId);

}
