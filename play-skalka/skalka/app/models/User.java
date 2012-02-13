package models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import play.cache.Cache;
import play.db.jpa.Model;
import play.mvc.Scope.Session;

import com.google.gson.JsonObject;

@Entity
@Table(name = "users")
public class User extends Model {

	public static final String JSON_TAG_FB_UID = "id";
	public static final String JSON_TAG_FIRST_NAME = "first_name";
	public static final String JSON_TAG_LAST_NAME = "last_name";
	public static final String JSON_TAG_GENDER = "gender";
	public static final String JSON_TAG_ACCESS_TOKEN = "accessToken";

	@Column(name = "fb_uid")
	public Long facebookId;

	@Column(name = "first_name")
	public String firstName;

	@Column(name = "last_name")
	public String lastName;

	@Column(name = "gender")
	public String gender;

	@Column(name = "birth_date")
	public Date birthDate;

	@Column(name = "added_when")
	public Date addedWhen;

	@Column(name = "last_login")
	public Date lastLogin;

	@Transient
	public String accessToken;

	public static void facebookOAuthCallback(JsonObject data) {

		System.out.println("facebookOAuthCallback: " + data);

		try {

			Long fbId = data.get(JSON_TAG_FB_UID).getAsLong();
			User user = User.find("byFacebookId", fbId).first();
			if (user == null) {
				user = new User();
				user.facebookId = fbId;
				user.addedWhen = new Date();
				if (data.has(JSON_TAG_FIRST_NAME)) {
					user.firstName = data.get(JSON_TAG_FIRST_NAME).getAsString();
				}

				if (data.has(JSON_TAG_LAST_NAME)) {
					user.lastName = data.get(JSON_TAG_LAST_NAME).getAsString();
				}

				if (data.has(JSON_TAG_GENDER)) {
					user.gender = data.get(JSON_TAG_GENDER).getAsString();
				}
				if (data.has(JSON_TAG_ACCESS_TOKEN)) {
					user.accessToken = data.get(JSON_TAG_ACCESS_TOKEN).getAsString();
				}
			}
			user.lastLogin = new Date();
			user.save();

			Session.current().put("user", user);
			Session.current().put(JSON_TAG_ACCESS_TOKEN, user.accessToken);

			Cache.set(user.accessToken, user, "2h");

			System.out.println("Access token: " + user.accessToken);
			System.out.println("User from cache: " + Cache.get(user.accessToken));

		} catch (Throwable e) {
			Session.current().put("authError", e.getMessage());
			e.printStackTrace();
		}
	}

	@Override
	public String toString() {
		return firstName + " " + lastName;
	}

}
