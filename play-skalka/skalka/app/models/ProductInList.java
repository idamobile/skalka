package models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import play.db.jpa.Model;

@Entity
@Table(name = "list_prod", 
	uniqueConstraints = { @UniqueConstraint(columnNames = { "list_id", "product_id" }), })
public class ProductInList extends Model {

	@Column(name = "list_id")
	public Long listId;

	@Column(name = "product_id")
	public Long productId;

	@OneToMany(fetch= FetchType.LAZY)
	@JoinColumns( {
		@JoinColumn(name="list_id", referencedColumnName="list_id"), 
		@JoinColumn(name="product_id", referencedColumnName="product_id")
	})
	public List<UserActionsInProductList> userActions;

	public ProductInList() {
	}

	public ProductInList(Long listId, Long productId) {
		this.listId = listId;
		this.productId = productId;
	}
}
