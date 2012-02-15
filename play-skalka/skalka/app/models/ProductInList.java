package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

import play.db.jpa.Model;

@Entity
@Table(name = "list_prod", uniqueConstraints = { @UniqueConstraint(columnNames = { "list_id",
		"product_id" }) })
public class ProductInList extends Model {

	@Column(name = "list_id")
	public Long listId;

	@Column(name = "product_id")
	public Long productId;

	// @MapsId("actionsOnProductsPK")
	// @OneToMany
	// @JoinColumns({ @JoinColumn(name = "list_id"), @JoinColumn(name =
	// "product_id") })
	@Transient
	public List<UserActionsInProductList> userActions;

	public ProductInList() {
	}

	public ProductInList(Long listId, Long productId) {
		this.listId = listId;
		this.productId = productId;
	}
}
