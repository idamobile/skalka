package controllers;

import java.util.List;

import models.Collaborator;
import models.User;

public class Collaborators extends Lists {

	public static void all(long id) {
		List<User> users = Collaborator.getUsers(id);
		render(users);
	}

	public static void add(long id, List<Long> userIds) {
		Collaborator.addUsers(userIds, id);
		all(id);
	}

	public static void remove(long id, List<Long> userIds) {
		Collaborator.removeUsers(userIds, id);
		all(id);
	}

}
