package models;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.ColumnResult;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.Id;
import javax.persistence.SqlResultSetMapping;

import play.db.jpa.Model;

@SqlResultSetMapping(name="CategoriesMapping", 
columns={ @ColumnResult(name="catName"), 
		  @ColumnResult(name="subcatName"),
		  @ColumnResult(name="id"),
		  @ColumnResult(name="image_url")}
)
@Entity
public class SubcategoryWithCategory {
	@Id
	public BigInteger id;
	
	public String name;
	
	public String imageUrl;

	public SubcategoryWithCategory(String name, BigInteger id, String imageUrl) {
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
	}

	public static Map<String, List<SubcategoryWithCategory>> getCategories(){
		Map<String, List<SubcategoryWithCategory>> result = new HashMap<String, List<SubcategoryWithCategory>>();
		EntityManager entityManager = play.db.jpa.JPA.em();
		
		String select = "SELECT c.name catName, s.name subcatName, s.id, s.image_url FROM categories c, subcategories s WHERE c.id = s.category_id";

		List<Object[]> list = entityManager.createNativeQuery(select, "CategoriesMapping").getResultList();
		for(Object[] objArray : list) { 
			String category = (String) objArray[0];
			List<SubcategoryWithCategory> subcategories = result.get(category);
			if(subcategories == null){
				subcategories = new ArrayList<SubcategoryWithCategory>();
				result.put(category, subcategories);
			}
			subcategories.add(new SubcategoryWithCategory((String)objArray[1], (BigInteger) objArray[2], (String)objArray[3]));
		}
		return result;
	}
}
