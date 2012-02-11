package com.skalka.server.db.mappers;

import java.util.List;

import com.skalka.server.domain.User;

public interface UserMapper {

	User findByFacebookId(String facebookId);

	User findByUid(String uid);

	List<User> selectAll();

}
