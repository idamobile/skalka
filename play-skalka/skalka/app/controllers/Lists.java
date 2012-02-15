package controllers;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import models.ErrorResult;
import models.Product;
import models.ProductInList;
import models.ProductsList;
import play.db.DB;
import play.db.jpa.GenericModel.JPAQuery;
import play.mvc.Controller;

public class Lists extends Controller {

	public static void productsInList(Long ownerId, Long targetId) {
		// System.out.println("OwnerId:" + ownerId + " targetId:" + targetId);
		JPAQuery query = ProductsList.find("ownerId=? and targetId=?", ownerId, targetId);
		renderJSON(query.fetch());
	}

	public static void index(long id) {
		ResultSet rs = DB
				.executeQuery("select * from list_prod lp, products p where p.id = lp.product_id and lp.list_id = "
						+ id);
		List<Product> list = new ArrayList<Product>();
		try {
			while (rs.next()) {
				Product p = Product.createFromResultSet(rs);
				list.add(p);
			}
		} catch (Throwable t) {
			t.printStackTrace();
		}
		List<Product> products = Product.findAll();
		render(products, list);
	}

	public static void addProduct(long listId, long productId) {
		ProductsList list = ProductsList.findById(listId);
		Product p = Product.findById(productId);
		if (list == null || p == null) {
			renderJSON(new ErrorResult());
		}
		if (list.productsInList == null) {
			list.productsInList = new ArrayList<ProductInList>();
		}
		ProductInList pil = new ProductInList(listId, productId);
		pil.save();
		list.productsInList.add(pil);
		list.save();
		renderJSON(ErrorResult.SUCCESS);
	}

	// render(list, products);

}
