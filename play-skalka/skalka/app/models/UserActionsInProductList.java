package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import models.pk.ActionsOnProductsPK;
import play.db.jpa.GenericModel;

@Entity
@Table(name = "user_actions_in_prod_list")
@IdClass(ActionsOnProductsPK.class)
public class UserActionsInProductList extends GenericModel {

	@Id
	public Long listId;

	@Id
	public Long productId;

	@Column(name = "user_id")
	public Long userId;

	@Column(name = "user_action")
	public String userAction;

	public UserActionsInProductList() {
	}

	public UserActionsInProductList(Long listId, Long productId, Long userId, String userAction) {
		this.listId = listId;
		this.productId = productId;
		this.userId = userId;
	}

}
