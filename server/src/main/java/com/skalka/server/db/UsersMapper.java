package com.skalka.server.db;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.skalka.server.domain.User;

public interface UsersMapper {

	@Select("select * from users where fb_uid = #{fb_uid}")
	@Results(value = { @Result(property = "uid", column = "uid"),
			@Result(property = "facebookId", column = "fb_uid"),
			@Result(property = "firstName", column = "first_name"),
			@Result(property = "lastName", column = "last_name") })
	User findByFacebookId(@Param("fb_uid") String facebookId);
}
