package controllers;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import models.ErrorResult;
import models.Product;
import models.ProductInList;
import models.ProductsList;
import models.User;
import models.UserActionsInProductList;
import play.cache.Cache;
import play.db.DB;
import play.db.jpa.GenericModel.JPAQuery;

public class Lists extends Application {

	public static final int PLACEHOLDERS_COUNT = 9;

	public static void productsInList(Long ownerId, Long targetId) {
		// System.out.println("OwnerId:" + ownerId + " targetId:" + targetId);
		JPAQuery query = ProductsList.find("ownerId=? and targetId=?", ownerId, targetId);
		renderJSON(query.fetch());
	}

	public static void index(long id) {
		ResultSet rs = DB
				.executeQuery("select p.* from list_prod lp, products p where p.id = lp.product_id and lp.list_id = "
						+ id);
		List<Product> list = new ArrayList<Product>();
		try {
			while (rs.next()) {
				Product p = Product.createFromResultSet(rs);
				list.add(p);
			}

			int placeholdersCount = PLACEHOLDERS_COUNT - list.size();
			for (int i = 0; i < placeholdersCount; i++) {
				Product placeholder = new Product();
				placeholder.isPlaceholder = true;
				list.add(placeholder);
			}
		} catch (Throwable t) {
			t.printStackTrace();
		}
		List<Product> products = Product.findAll();

		User targetUser = Cache.get(session.get(SESSION_PARAM_TARGET_FRIEND), User.class);
		User ownerUser = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
		List<ProductsList> lists = ProductsList.fetchLists(ownerUser.id, targetUser.id);

		render(products, list, targetUser, lists);
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

	public static void addUserAction(Long listId, Long productId, Long userId, String userAction) {
		JPAQuery query = ProductInList.find("listId = ? AND productId = ? ", listId, productId);
		ProductInList pil = query.first();
		if (pil == null) {
			renderJSON(new ErrorResult(-1, "product not in list"));
		}
		User user = User.findById(userId);
		if (user == null) {
			renderJSON(new ErrorResult(-1, "wrong user id"));
		}
		if (pil.userActions == null) {
			pil.userActions = new ArrayList<UserActionsInProductList>();
		}
		System.out.println("Action==" + userAction);
		try {
			UserActionsInProductList uaid = new UserActionsInProductList(listId, productId, userId,
					userAction);
			uaid.save();
			pil.userActions.add(uaid);
			pil.save();
		} catch (Throwable w) {
			renderJSON(new ErrorResult());
		}
		renderJSON(ErrorResult.SUCCESS);
	}
}
