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
import play.Logger;
import play.cache.Cache;
import play.db.DB;
import play.db.jpa.GenericModel.JPAQuery;
import utils.Constants;

public class Lists extends Application {

	public static final int PLACEHOLDERS_COUNT = 8;

	public static void productsInList(Long ownerId, Long targetId) {
		// System.out.println("OwnerId:" + ownerId + " targetId:" + targetId);
		JPAQuery query = ProductsList.find("ownerId=? and targetId=?", ownerId, targetId);
		renderJSON(query.fetch());
	}

	private static void extendList(List<Product> source) {
		int placeholdersCount = PLACEHOLDERS_COUNT - source.size();
		for (int i = 0; i < placeholdersCount; i++) {
			Product placeholder = new Product();
			placeholder.isPlaceholder = true;
			source.add(placeholder);
		}
	}

	private static List<Product> createSidebarList(long id) {
		List<Product> list = new ArrayList<Product>();
		ResultSet rs = DB
				.executeQuery("select p.* from list_prod lp, products p where p.id = lp.product_id and lp.list_id = "
						+ id);
		try {
			while (rs.next()) {
				Product p = Product.createFromResultSet(rs);
				list.add(p);
			}
			extendList(list);
		} catch (Throwable t) {
			t.printStackTrace();
		}
		return list;
	}

	public static void pagesCount() {
		long count = Product.count();
		long pc = count / Constants.PRODUCTS_PAGE_SIZE
				+ (count % Constants.PRODUCTS_PAGE_SIZE != 0 ? 1 : 0);
		renderText(pc);
	}

	public static void listPage(long listId, long page) {
		page = (page < 1) ? 1 : page;
		long startIndex = page * Constants.PRODUCTS_PAGE_SIZE;
		List<Product> products = Products.getOrderedList(listId, startIndex);

		render(products);
	}

	public static void listIndex(long id) {

		List<Product> list = createSidebarList(id);

		List<Product> products = Products.getOrderedList(id);

		ProductsList requestedList = ProductsList.findById(id);
		Long targetId = requestedList.targetId;

		User targetUser = User.findById(targetId);
		session.put(SESSION_PARAM_TARGET_FRIEND, targetUser.facebookId);
		Cache.set(String.valueOf(targetUser.facebookId), targetUser, Constants.CACHE_TIMEOUT);

		User ownerUser = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
		List<ProductsList> lists = ProductsList.fetchLists(ownerUser.id, targetUser.id);

		Long listId = id;
		render(products, list, targetUser, lists, listId);
	}

	public static void addProduct(long listId, long productId) {
		ProductsList pList = ProductsList.findById(listId);
		Product p = Product.findById(productId);
		if (pList == null || p == null) {
			renderJSON(new ErrorResult());
		}
		if (pList.productsInList == null) {
			pList.productsInList = new ArrayList<ProductInList>();
		}
		ProductInList pil = new ProductInList(listId, productId);
		try {
			pil.save();
			pList.productsInList.add(pil);
			pList.save();
		} catch (Throwable t) {
			Logger.error("Unable to add product to list", t);
		}
		User targetUser = User.findById(pList.targetId);
		renderProductList(listId, targetUser);
	}

	public static void removeProductFromList(long listId, long productId) {
		ProductInList pl = ProductInList.find("listId = ? AND productId = ? ", listId, productId)
				.first();
		try {
			pl.delete();
		} catch (Throwable t) {
			Logger.error("Unable to remove product to list", t);
		}

		ProductsList pList = ProductsList.findById(listId);
		User targetUser = User.findById(pList.targetId);
		renderProductList(listId, targetUser);
	}

	public static void renderProductList(long listId, User targetUser) {
		List<Product> list = createSidebarList(listId);
		render(list, targetUser);
	}

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

	public static void create() {
		User targetUser = Cache.get(session.get(SESSION_PARAM_TARGET_FRIEND), User.class);
		User ownerUser = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);

		ProductsList list = new ProductsList("Gift for " + targetUser.firstName, ownerUser.id,
				targetUser.id);
		list.save();

		Lists.listIndex(list.id);
	}
}
