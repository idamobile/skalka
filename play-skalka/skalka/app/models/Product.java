package models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

@Entity
@Table(name = "products")
public class Product extends Model {

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
			String productType, Date addedWhen) {
		this.descr = descr;
		this.story = story;
		this.imageUrl = imageUrl;
		this.addedBy = addedBy;
		this.price = price;
		this.productType = productType;
		this.addedWhen = addedWhen;
	}

}
