package com.skalka.server.controllers;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

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
	public User findByFacebookId(@PathParam("fb_uid") String facebookId) {
		return usersMapper.findByFacebookId(facebookId);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{uid}")
	@Transactional
	public User findByUid(@PathParam("uid") String uid) {
		return usersMapper.findByUid(uid);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/")
	@Transactional
	public List<User> selectAll() {
		return usersMapper.selectAll();
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
	@Produces(MediaType.TEXT_PLAIN)
	@Transactional
	public String update(String facebookId, String firstName, String lastName, Date birthDate,
			String gender) {
		User user = usersMapper.findByFacebookId(facebookId);

		if (user == null) {
			return "false";
		}

		user.setFacebookId(new BigInteger(facebookId));
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setBirthDate(birthDate);
		user.setGender(Gender.parse(gender));
		user.setImageUrl(FacebookUtils.getImageUrl(facebookId));

		usersMapper.update(user);

		return "true";
	}

	@GET
	@Path("/delete/fb{fb_uid}")
	@Produces(MediaType.TEXT_PLAIN)
	@Transactional
	public String deleteByFacebookId(@PathParam("fb_uid") String facebookId) {
		usersMapper.deleteByFacebookId(facebookId);
		return "true";
	}

	@GET
	@Path("/delete/{uid}")
	@Produces(MediaType.TEXT_PLAIN)
	@Transactional
	public String deleteByUid(@PathParam("uid") String uid) {
		usersMapper.deleteByUid(uid);
		return "true";
	}

	@GET
	@Path("/count")
	@Produces(MediaType.TEXT_PLAIN)
	@Transactional
	public String count() {
		return String.valueOf(usersMapper.count());
	}
}
