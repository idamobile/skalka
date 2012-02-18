package models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.Logger;
import play.db.jpa.GenericModel;

@Entity
@Table(name = "collaborators")
public class Collaborator extends GenericModel {

	@Id
	@Column(name = "user_id")
	public Long userId;

	@Id
	@Column(name = "list_id")
	public Long listId;

	public Collaborator() {

	}

	public Collaborator(Long userId, Long listId) {
		this.userId = userId;
		this.listId = listId;
	}

	public static void addUsers(List<Long> users, Long listId) {
		for (Long userId : users) {
			try {
				User user = User.ensureUser(userId);
				new Collaborator(user.id, listId).save();
			} catch (Throwable e) {
				Logger.error("Unable to add userId: " + userId, e);
			}
		}
	}

	public static List<User> getUsers(Long listId) {
		List<Collaborator> collabs = Collaborator.find("byListId", listId).fetch();
		List<User> users = new ArrayList<User>();

		for (Collaborator cl : collabs) {
			User user = User.findById(cl.userId);
			users.add(user);
		}

		return users;
	}

	public static void removeUsers(List<Long> users, Long listId) {
		for (Long userId : users) {
			User user = User.findByFacebookId(userId);
			Collaborator.delete("userId = ? AND listId = ?", user.id, listId);
		}
	}

}
