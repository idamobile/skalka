package com.skalka.server.controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.inject.Inject;
import com.skalka.server.db.mappers.UserMapper;
import com.skalka.server.domain.User;

@Path("/users")
public class UsersController {

	@Inject
	private UserMapper usersMapper;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/fb{fb_uid}")
	public User getByFbId(@PathParam("fb_uid") String facebookId) {
		return usersMapper.findByFacebookId(facebookId);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{uid}")
	public User getByUid(@PathParam("uid") String uid) {
		return usersMapper.findByUid(uid);
	}

}
