package controllers;

import java.util.List;
import java.util.Map;

import models.ProductInList;
import models.ProductsList;
import models.SubcategoryWithCategory;
import play.db.jpa.GenericModel.JPAQuery;
import play.mvc.Controller;

public class Lists extends Controller {

	public static void productsInList(Long ownerId, Long targetId) {
		System.out.println("OwnerId:" + ownerId + " targetId:" + targetId);
		JPAQuery query = ProductsList.find("ownerId=? and targetId=?", ownerId, targetId);
		renderJSON(query.fetch());
	}

}
