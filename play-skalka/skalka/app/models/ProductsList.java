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

	@Column(name = "description")
	public String desc;

	@Column(name = "owner_id")
	public Long ownerId;

	@Column(name = "target_id")
	public Long targetId;

	@Column(name = "event_id")
	public Long eventId;
	
	@OneToMany
	@JoinColumn(name="list_id")
	public List<ProductInList> productsInList;
	
	public ProductsList() {
	}

	public ProductsList(String desc, Long ownerId, Long targetId, Long eventId, List<ProductInList> productsInList) {
		this.desc = desc;
		this.ownerId = ownerId;
		this.targetId = targetId;
		this.eventId = eventId;
		this.productsInList = productsInList;
	}
}
