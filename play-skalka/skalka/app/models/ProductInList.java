package models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

@Entity
@Table(name = "list_prod")
public class ProductInList extends Model {

	@Column(name = "list_id")
	public Long listId;

	@Column(name = "product_id")
	public Long productId;


	public ProductInList() {
	}

	public ProductInList(Long listId, Long productId) {
		this.listId = listId;
		this.productId = productId;
	}
}
