package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

@Entity
@Table(name = "products_subcategories")
public class ProductCategories extends Model {

	@Column(name = "product_id")
	public Long productId;

	@Column(name = "subcategory_id")
	public Long subcategoryId;

	public ProductCategories() {
	}

	public ProductCategories(Long productId, Long categoryId) {
		this.productId = productId;
		this.subcategoryId = categoryId;
	}

}
