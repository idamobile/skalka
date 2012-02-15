package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumns;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import play.db.jpa.Model;

@Entity
@Table(name = "user_actions_in_prod_list", uniqueConstraints = { @UniqueConstraint(columnNames = { 
        "list_id", "product_id", "user_id" }) })
public class UserActionsInProductList extends Model {

	@Column(name = "list_id")
	public Long listId;

	@Column(name = "product_id")
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
