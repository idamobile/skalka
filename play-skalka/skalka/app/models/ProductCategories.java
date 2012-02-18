package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.jpa.GenericModel;

@Entity
@Table(name = "products_subcategories")
public class ProductCategories extends GenericModel {

	@Id
	@Column(name = "product_id")
	public Long productId;

	@Id
	@Column(name = "subcategory_id")
	public Long subcategoryId;

	public ProductCategories() {
	}

	public ProductCategories(Long productId, Long categoryId) {
		this.productId = productId;
		this.subcategoryId = categoryId;
	}

}
