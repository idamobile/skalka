package models;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

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

	@Override
	public String toString() {
		return "Subcategory [name=" + name + ", imageUrl=" + imageUrl + ", category=" + category
				+ "]";
	}

	@Transient
	public boolean isSelected;

	public static Map<Category, List<Subcategory>> getTree(User user) {
		List<UserCategories> usersCats = new ArrayList<UserCategories>();
		if (user != null) {
			usersCats = UserCategories.find("byUserId", user.id).fetch();
		}

		Set<Long> subcatIds = new HashSet<Long>();
		for (UserCategories cat : usersCats) {
			subcatIds.add(cat.subcategoryId);
		}
		return getSubcategories(subcatIds);
	}
	
	public static Map<Category, List<Subcategory>> getTree(Product product) {
		List<ProductCategories> productCats = new ArrayList<ProductCategories>();
		if (product != null) {
			productCats = ProductCategories.find("byProductId", product.id).fetch();
		}

		Set<Long> subcatIds = new HashSet<Long>();
		for (ProductCategories cat : productCats) {
			subcatIds.add(cat.subcategoryId);
		}
		return getSubcategories(subcatIds);
	}

	private static Map<Category, List<Subcategory>> getSubcategories(Set<Long> selectedSubcategoriesIds){
		List<Subcategory> cats = Subcategory.all().fetch();

		Map<Category, List<Subcategory>> c = new TreeMap<Category, List<Subcategory>>();

		for (Subcategory sub : cats) {
			if (selectedSubcategoriesIds.contains(sub.id)) {
				sub.isSelected = true;
			}
			List<Subcategory> subcats = c.get(sub.category); 
			if (subcats == null) {
				c.put(sub.category, subcats = new ArrayList<Subcategory>());
			}
			subcats.add(sub);
		}
		return c;		
	}
	
}
