package controllers;

import java.util.ArrayList;
import java.util.List;

import models.ErrorResult;
import models.Product;
import models.ProductInList;
import models.ProductsList;
import play.db.jpa.GenericModel.JPAQuery;
import play.mvc.Controller;

public class Lists extends Controller {

	public static void productsInList(Long ownerId, Long targetId) {
		//System.out.println("OwnerId:" + ownerId + " targetId:" + targetId);
		JPAQuery query = ProductsList.find("ownerId=? and targetId=?", ownerId, targetId);
		renderJSON(query.fetch());
	}

	public static void index(long id) {
		List<Product> products = Product.findAll();
		render(products);
	}
	
	public static void addProduct(long listId, long productId){
		ProductsList list = ProductsList.findById(listId);
		Product p = Product.findById(productId);
		if(list == null || p == null){
			render(new ErrorResult());
		}
		if (list.productsInList == null){
			list.productsInList = new ArrayList<ProductInList>();
		}
		ProductInList pil = new ProductInList(listId, productId);
		pil.save();
		list.productsInList.add(pil);
		list.save();
		render(ErrorResult.SUCCESS);
	}

}
