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
	public String description;

	public String story;

	public String imageUrl;

	public Long addedBy;

	public float price;

	public String productType;

	public Date addedWhen;

}
