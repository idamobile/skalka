package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import play.db.jpa.Model;

@Entity
@Table(name = "subcategories")
public class Subcategory extends Model {

	@Column(name = "name")
	public String name;

	@Column(name = "image_url")
	public String imageUrl;

	@ManyToOne
	public Category category;

}
