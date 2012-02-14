package models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Table;
import javax.persistence.Transient;

import play.db.jpa.Model;

@Entity
@Table(name = "products")
public class Product extends Model {

	@ElementCollection(targetClass = Long.class)
	@JoinTable(name = "products_subcategories", joinColumns = { @JoinColumn(name = "product_id", referencedColumnName = "id") })
	@Column(name = "subcategory_id", nullable = false)
	public List<Long> subcategoryId;

	@Column(name = "description")
	public String descr;

	@Column(name = "story")
	public String story;

	@Column(name = "image_url")
	public String imageUrl;

	@Column(name = "added_by_uid")
	public Long addedBy;

	@Column(name = "price")
	public float price;

	@Column(name = "type")
	public String productType;

	@Column(name = "added_when")
	public Date addedWhen;

	@Column(name = "image")
	public String image;

	public Product() {
	}

	public Product(String descr, String story, String imageUrl, Long addedBy, float price,
			String productType, Date addedWhen, List<Long> subcategoryId) {
		System.out.println("subcat:" + subcategoryId);
		this.descr = descr;
		this.story = story;
		this.imageUrl = imageUrl;
		this.addedBy = addedBy;
		this.price = price;
		this.productType = productType;
		this.addedWhen = addedWhen;
		this.subcategoryId = subcategoryId;
	}

	@Transient
	private User author;

	public User getAuthor() {
		if (author == null) {
			Product product = Product.findById(id);
			if (product != null && product.addedBy != null) {
				author = User.findByFacebookId(product.addedBy);
			}
		}
		return author;

	}
}
