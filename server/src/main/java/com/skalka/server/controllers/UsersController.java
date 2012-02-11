package com.skalka.server.controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.google.inject.Inject;
import com.skalka.server.db.UsersDao;
import com.skalka.server.domain.User;

@Path("/users")
public class UsersController {

	@Inject
	private UsersDao usersDao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public User get(@QueryParam("fb_uid") String facebookId) {
		return usersDao.findByFacebookId(facebookId);
	}
}
