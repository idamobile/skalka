package com.skalka.server.controllers;

import java.math.BigInteger;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.mybatis.guice.transactional.Transactional;

import com.google.inject.Inject;
import com.skalka.server.db.mappers.UserMapper;
import com.skalka.server.domain.Gender;
import com.skalka.server.domain.User;
import com.skalka.server.utils.FacebookUtils;

@Path("/users")
public class UsersController {

	// private Logger
	@Inject
	private UserMapper usersMapper;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/fb{fb_uid}")
	@Transactional
	public User getByFbId(@PathParam("fb_uid") String facebookId) {
		return usersMapper.findByFacebookId(facebookId);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{uid}")
	@Transactional
	public User getByUid(@PathParam("uid") String uid) {
		return usersMapper.findByUid(uid);
	}

	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/add")
	@Transactional
	public String add(String facebookId, String firstName, String lastName, Date birthDate,
			String gender) {
		User user = new User();

		user.setFacebookId(new BigInteger(facebookId));
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setBirthDate(birthDate);
		user.setGender(Gender.parse(gender));
		user.setImageUrl(FacebookUtils.getImageUrl(facebookId));
		usersMapper.add(user);

		user = usersMapper.findByFacebookId(facebookId);
		return user != null ? "" + user.getUid() : null;
	}

	@POST
	@Path("/update")
	@Transactional
	public void update(String facebookId, String firstName, String lastName, Date birthDate,
			String gender) {
		User user = usersMapper.findByFacebookId(facebookId);

		if (user == null) {
			return;
		}

		user.setFacebookId(new BigInteger(facebookId));
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setBirthDate(birthDate);
		user.setGender(Gender.parse(gender));
		user.setImageUrl(FacebookUtils.getImageUrl(facebookId));

		usersMapper.update(user);
	}

	@GET
	@Path("/delete/fb{fb_uid}")
	@Transactional
	public void deleteByFacebookId(@PathParam("fb_uid") String facebookId) {
		usersMapper.deleteByFacebookId(facebookId);
	}

	@GET
	@Path("/delete/{uid}")
	@Transactional
	public void deleteByUid(@PathParam("uid") String uid) {
		usersMapper.deleteByUid(uid);
	}

	@GET
	@Path("/count")
	@Produces(MediaType.TEXT_PLAIN)
	@Transactional
	public int count() {
		return usersMapper.count();
	}
}
