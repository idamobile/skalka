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

	public static final String HQL_FIND_LISTS = "ownerId=? AND targetId=? ORDER BY lastUpdated DESC";

	public static final String HQL_FIND_LATEST = "ownerId=? ORDER BY lastUpdated DESC";

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
		lastUpdated = new Date();
	}

	public ProductsList(String name, Long ownerId, Long targetId) {
		this();
		this.name = name;
		this.ownerId = ownerId;
		this.targetId = targetId;
	}

	public static boolean hasLists(Long ownerId, Long targetId) {
		return ProductsList.count(HQL_FIND_LISTS, ownerId, targetId) > 0;
	}

	public static ProductsList fetchLatest(Long ownerId, Long targetId) {
		return ProductsList.find(HQL_FIND_LISTS, ownerId, targetId).first();
	}

	public static List<ProductsList> fetchLists(Long ownerId, Long targetId) {
		return ProductsList.find(HQL_FIND_LISTS, ownerId, targetId).fetch();
	}

	public static ProductsList fetchLatest(Long ownerId) {
		return ProductsList.find(HQL_FIND_LATEST, ownerId).first();
	}

	/**
	 * Returns list of product lists
	 * 
	 * @param ownerId
	 * @return
	 */
	public static List<ProductsList> getMyLists(Long ownerId) {
		return ProductsList.find(HQL_FIND_LATEST, ownerId).fetch();
	}
}
