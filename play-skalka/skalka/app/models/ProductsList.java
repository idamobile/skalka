package models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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

	@Column(name = "last_updated")
	public Date lastUpdated;

	@OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "list_id")
	public List<ProductInList> productsInList;

	public ProductsList() {
	}

	public ProductsList(String name, Long ownerId, Long targetId) {
		this.name = name;
		this.ownerId = ownerId;
		this.targetId = targetId;
	}
}
