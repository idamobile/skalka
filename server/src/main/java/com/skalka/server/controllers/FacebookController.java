package com.skalka.server.controllers;

import java.net.URI;
import java.util.Arrays;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import com.skalka.server.utils.FacebookUtils;
import com.sun.jersey.api.view.Viewable;

@Path("/fb")
public class FacebookController {

	@GET
	@Path("/auth")
	public Response authorize(@QueryParam("code") String code, @QueryParam("error") String error) {

		if (code != null) {

			String redirectUrl = "http://project.idamob.ru:8000/server/fb/auth";

			HttpClient httpClient = new DefaultHttpClient();
			HttpGet getCodeRequest = new HttpGet(FacebookUtils.getAccessTokenRequest(code,
					redirectUrl));

			try {
				HttpResponse response = httpClient.execute(getCodeRequest);
				System.out.println(Arrays.toString(response.getAllHeaders()));

				return Response.ok(
						new Viewable("/", response.getParams().getParameter("access_token")))
						.build();

			} catch (Exception e) {
				return Response.ok(new Viewable("/500", e)).build();
			}
		} else {
			return Response.ok(new Viewable("/500", error)).build();
		}
	}

	@POST
	@Path("/login")
	public Response fbLogin() {
		return Response.seeOther(
				URI.create(FacebookUtils
						.getOAuthDialogURL("http://project.idamob.ru/server/fb/auth"))).build();
	}

}
