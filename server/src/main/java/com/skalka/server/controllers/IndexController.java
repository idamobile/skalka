package com.skalka.server.controllers;

import java.net.URI;

import javax.ws.rs.CookieParam;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

import com.google.inject.Inject;
import com.skalka.server.AuthorizationService;
import com.sun.jersey.api.view.Viewable;

@Path("/")
@Produces({ "text/html", "application/xhtml+xml", "application/xml" })
public class IndexController {

	private Logger log = Logger.getLogger(IndexController.class);

	@CookieParam(value = "sk_ssid")
	private String sessionId;

	@Inject
	private AuthorizationService authService;

	@GET
	@Path("/")
	public Response index() {
		if (!authService.isAuthorized()) {
			return Response.seeOther(URI.create("/signin")).build();
		} else {
			return Response.ok(new Viewable("/index", authService))
					.cookie(new NewCookie("sk_ssid", authService.getSessionId())).build();
		}
	}

	@POST
	@Path("/")
	public Response afterSignin(@FormParam("user") String user) {
		sessionId = user + "_ssid";
		authService.setSessionId(sessionId);
		authService.setUser(user);
		authService.setAuthorized(true);

		return Response.seeOther(URI.create("/"))
				.cookie(new NewCookie("sk_ssid", authService.getSessionId())).build();
	}

	@GET
	@Path("/signin")
	public Response signin() {
		return Response.ok(new Viewable("/signin")).build();
	}

}
