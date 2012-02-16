package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

@Entity
@Table(name = "categories")
public class Category extends Model implements Comparable<Category>{

	@Column(name = "name")
	public String name;

	@Column(name = "image_url")
	public String imageUrl;
	
	@Column(name = "weight")
	public Float weight;

	@Override
	public String toString() {
		return "Category [name=" + name + ", imageUrl=" + imageUrl + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((imageUrl == null) ? 0 : imageUrl.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Category other = (Category) obj;
		if (imageUrl == null) {
			if (other.imageUrl != null)
				return false;
		} else if (!imageUrl.equals(other.imageUrl))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	@Override
	public int compareTo(Category o) {
		if(o == null || o.weight == null) return 1;
		int result = o.weight.compareTo(weight);
		if(result != 0 || o.name == null){
			return result;
		}
		return o.name.compareTo(name);
	}
}
