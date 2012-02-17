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

	public static boolean addUsers(List<Long> users, Long listId) {
		boolean success = true;
		for (Long userId : users) {
			try {
				new Collaborator(userId, listId).save();
			} catch (Throwable e) {
				success = false;
				Logger.error("Unable to add userId: " + userId, e);
			}
		}
		return success;
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

	public static boolean removeUsers(List<Long> users, Long listId) {
		boolean success = true;
		try {
			for (Long userId : users) {
				Collaborator.delete("userId = ? AND listId = ?", userId, listId);
			}
		} catch (Throwable e) {
			success = false;
			Logger.error("Unable to remove users", e);
		}

		return success;
	}

}
