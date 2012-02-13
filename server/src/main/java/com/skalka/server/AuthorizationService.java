package com.skalka.server;

import com.google.inject.servlet.SessionScoped;

@SessionScoped
public class AuthorizationService {

	private String user;
	private String sessionId;

	private boolean authorized;

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public boolean isAuthorized() {
		return authorized;
	}

	public void setAuthorized(boolean authorized) {
		this.authorized = authorized;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	@Override
	public String toString() {
		return "AuthorizationService [user=" + user + ", sessionId=" + sessionId + ", authorized="
				+ authorized + "]";
	}

}
