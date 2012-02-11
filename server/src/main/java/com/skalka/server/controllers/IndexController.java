package com.skalka.server.controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.sun.jersey.api.view.Viewable;

@Path("/")
@Produces({ "text/html", "application/xhtml+xml", "application/xml" })
public class IndexController {
	@GET
	@Path("index")
	public Viewable index() {
		return new Viewable("/index", "THE MODEL");
	}

}
