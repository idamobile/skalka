package models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

	public static Map<Category, List<Subcategory>> getTree() {
		List<Subcategory> cats = Subcategory.all().fetch();

		Map<Category, List<Subcategory>> c = new HashMap<Category, List<Subcategory>>();

		for (Subcategory sub : cats) {
			if (!c.containsKey(sub.category)) {
				c.put(sub.category, new ArrayList<Subcategory>());
			}
			c.get(sub.category).add(sub);
		}
		return c;
	}

}
