package com.skalka.server.db.mappers;

import java.util.List;

import com.skalka.server.domain.User;

public interface UserMapper {

	/**
	 * Searches user in the database by Facebook ID
	 * 
	 * @param facebookId
	 * @return
	 */
	User findByFacebookId(String facebookId);

	/**
	 * Searches user by UID
	 * 
	 * @param uid
	 * @return
	 */
	User findByUid(String uid);

	/**
	 * Returns all users from database
	 * 
	 * @return
	 */
	List<User> selectAll();

	/**
	 * Adds user and returns UID of created entity
	 * 
	 * @param user
	 * @return
	 */
	String add(User user);

	/**
	 * Updates user
	 * 
	 * @return true if user was successfully updated
	 */
	boolean update();

	/**
	 * Deletes user by Facebook ID
	 * 
	 * @param facebookId
	 * @return true if user was successfully deleted
	 */
	boolean deleteByFacebookId(String facebookId);

	/**
	 * Deletes user by UID
	 * 
	 * @param uid
	 * @return true if user was successfully deleted
	 */
	boolean deleteByUid(String uid);

	/**
	 * 
	 * @return count of users in the database
	 */
	int count();

}
