package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import play.db.jpa.Model;

@Entity
@Table(name = "lists")
public class ProductsList extends Model {

	@Column(name = "name")
	public String name;

	@Column(name = "owner_id")
	public Long ownerId;

	@Column(name = "target_id")
	public Long targetId;

	@OneToMany
	@JoinColumn(name = "list_id")
	public List<ProductInList> productsInList;

	public ProductsList() {
	}

}
