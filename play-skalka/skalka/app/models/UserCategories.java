package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

@Entity
@Table(name = "user_subcategories")
public class UserCategories extends Model {

	@Column(name = "user_id")
	public Long userId;

	@Column(name = "category_id")
	public Long categoryId;

}
