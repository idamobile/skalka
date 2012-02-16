package models;

import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Table;
import javax.persistence.Transient;

import play.Logger;
import play.cache.Cache;
import play.db.jpa.Model;
import play.libs.WS;
import play.mvc.Scope.Session;
import utils.Constants;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

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
	
	@ElementCollection(targetClass = Long.class)
	@JoinTable(name = "user_subcategories", joinColumns = { @JoinColumn(name = "user_id", referencedColumnName = "id") })
	@Column(name = "subcategory_id", nullable = true)
	public List<Long> subcategoryId;

	@Transient
	public String accessToken;

	public static void facebookOAuthCallback(JsonObject data) {

		System.out.println("facebookOAuthCallback: " + data);

		try {

			Long fbId = data.get(JSON_TAG_FB_UID).getAsLong();
			User user = User.find("byFacebookId", fbId).first();
			if (user == null) {
				user = fromFbJson(data);
			}

			if (data.has(JSON_TAG_ACCESS_TOKEN)) {
				user.accessToken = data.get(JSON_TAG_ACCESS_TOKEN).getAsString();
			}

			user.lastLogin = new Date();
			user.save();

			Session.current().put("user", user);
			Session.current().put(JSON_TAG_ACCESS_TOKEN, user.accessToken);

			Cache.set(user.accessToken, user, Constants.CACHE_TIMEOUT);

			Logger.warn("Saving accessToken: " + user.accessToken);

		} catch (Throwable e) {
			Session.current().put("authError", e.getMessage());
			e.printStackTrace();
		}
	}

	public static User fromFbJson(JsonObject data) {
		User user = new User();
		user.facebookId = data.get(JSON_TAG_FB_UID).getAsLong();
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

		return user;
	}

	public String getImageUrl() {
		return "http://graph.facebook.com/" + facebookId + "/picture";
	}

	public static User findByFacebookId(Long facebookId) {
		return User.find("byFacebookId", facebookId).first();
	}

	public static boolean hasUserWithFacebookId(Long facebookId) {
		return User.count("byFacebookId", facebookId) > 0;
	}

	public static User ensureUser(Long facebookId) {

		User user = User.findByFacebookId(facebookId);
		if (user == null) {
			try {

				String response = WS.url("http://graph.facebook.com/" + facebookId).get()
						.getString();
				JsonObject obj = new JsonParser().parse(response).getAsJsonObject();

				Logger.warn("Got response from Facebook: " + obj.toString());

				user = User.fromFbJson(obj);
				user.save();

			} catch (Throwable e) {
				return null;
			}
		}
		return user;
	}

	@Override
	public String toString() {
		return firstName + " " + lastName;
	}

	public static class UserSerializer implements JsonSerializer<User> {

		@Override
		public JsonElement serialize(User user, Type type, JsonSerializationContext ctx) {
			JsonObject obj = new JsonObject();
			obj.addProperty(JSON_TAG_FB_UID, user.facebookId);

			if (user.firstName != null) {
				obj.addProperty(JSON_TAG_FIRST_NAME, user.firstName);
			}

			if (user.lastName != null) {
				obj.addProperty(JSON_TAG_LAST_NAME, user.lastName);
			}

			if (user.gender != null) {
				obj.addProperty(JSON_TAG_GENDER, user.gender);
			}
			return obj;
		}

	}

}
