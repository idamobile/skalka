package models;

import java.sql.ResultSet;
import java.text.DecimalFormat;
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
import utils.Constants;

@Entity
@Table(name = "products")
public class Product extends Model {

	private static final DecimalFormat DECIMAL_FORMAT = new DecimalFormat("#,##0.00");

	@ElementCollection(targetClass = Long.class)
	@JoinTable(name = "products_subcategories", joinColumns = { @JoinColumn(name = "product_id", referencedColumnName = "id") })
	@Column(name = "subcategory_id", nullable = true)
	public List<Long> subcategoryId;

	@Column(name = "description")
	public String descr;

	@Column(name = "story")
	public String story;

	@Column(name = "image_url")
	public String imageUrl;

	@Column(name = "product_url")
	public String productUrl;

	@Column(name = "added_by_uid")
	public Long addedBy;

	@Column(name = "price")
	public float price;

	@Column(name = "currency")
	public String currency;

	@Column(name = "type")
	public String productType;

	@Column(name = "added_when")
	public Date addedWhen;

	@Column(name = "image_feed")
	public String imageFeed;

	@Column(name = "image_details")
	public String imageDetails;

	@Column(name = "image_list")
	public String imageList;

	@Column(name = "is_public")
	public String isPublic = "t";

	@Transient
	public boolean isPlaceholder = false;

	public Product() {
	}

	public Product(String descr, String story, String imageUrl, Long addedBy, String productType,
			Date addedWhen) {
		this.descr = descr;
		this.story = story;
		this.imageUrl = imageUrl;
		this.addedBy = addedBy;
		this.productType = productType;
		this.addedWhen = addedWhen;
	}

	public String getPrice() {
		return (currency == null || "null".equals(currency) ? "" : currency)
				+ DECIMAL_FORMAT.format(price);
	}

	@Transient
	private User author;

	public User getAuthor() {
		if (author == null) {
			Product product = Product.findById(id);
			if (product != null && product.addedBy != null) {
				author = User.findById(product.addedBy);
			}
		}
		return author;

	}

	public static Product createFromResultSet(ResultSet rs) {
		try {
			Product p = new Product();

			p.id = rs.getLong("id");
			p.descr = rs.getString("description");
			p.story = rs.getString("story");
			p.productUrl = rs.getString("product_url");
			p.imageUrl = rs.getString("image_url");
			p.imageDetails = rs.getString("image_details");
			p.imageFeed = rs.getString("image_feed");
			p.imageList = rs.getString("image_list");
			p.addedBy = rs.getLong("added_by_uid");
			p.price = rs.getFloat("price");
			p.currency = rs.getString("currency");
			p.productType = rs.getString("type");
			p.addedWhen = rs.getDate("added_when");
			p.isPublic = rs.getString("is_public");

			return p;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public static long pagesCount(Long ownerId) {
		long count = 0;

		if (ownerId == null) {
			count = Product.count();
		} else {
			count = Product.count("byAddedBy", ownerId);
		}

		long pc = count / Constants.PRODUCTS_PAGE_SIZE
				+ (count % Constants.PRODUCTS_PAGE_SIZE != 0 ? 1 : 0);
		return pc;
	}
}
