package models;

import javax.persistence.Id;

import play.db.jpa.Model;
import play.mvc.Scope.Session;

import com.google.gson.JsonObject;

public class User extends Model {
	@Id
	public Long id;
	public String email;

	public static void facebookOAuthCallback(JsonObject data) {
		Session.current().put("user", data.get("email").getAsString());
	}
}
