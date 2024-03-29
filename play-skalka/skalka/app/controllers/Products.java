package controllers;

import java.io.File;
import java.io.IOException;
import java.sql.ResultSet;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import models.Category;
import models.ErrorResult;
import models.Product;
import models.ProductCategories;
import models.ProductInList;
import models.ProductsList;
import models.Subcategory;
import models.User;
import models.UserActionsInProductList;
import play.Logger;
import play.cache.Cache;
import play.data.validation.Required;
import play.db.DB;
import play.db.jpa.Blob;
import play.db.jpa.GenericModel.JPAQuery;
import play.libs.Codec;
import play.libs.Images;
import play.libs.WS;
import play.libs.WS.HttpResponse;
import play.mvc.Before;
import play.mvc.Scope.Params;
import play.mvc.Scope.Session;
import utils.Constants;
import utils.html_parser.ProductParser;

public class Products extends Application {

	private static final DecimalFormat DECIMAL_FORMAT = new DecimalFormat("#0.00%");

	@Before
	static void storeMyLists() {
		User me = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
		List<ProductsList> myLists = ProductsList.getMyLists(me.id);

		renderArgs.put("myLists", myLists);

		String paramName = null;
		if (Params.current()._contains("productId")) {
			paramName = "productId";
		} else if (Params.current()._contains("id")) {
			paramName = "id";
		}

		if (paramName != null) {
			session.put(SESSION_PARAM_CURRENT_PRODUCT, Params.current().get(paramName));
		}

	}

	public static void parseUrl(String url) {
		try {
			renderJSON(new ProductParser().parse(url));
		} catch (Exception e) {
			e.printStackTrace();
			renderJSON(new ErrorResult(Constants.ERROR_PARSING_FAILED, e.getMessage()));
		}
	}

	public static void add(String descr, String story, @Required String imageUrl,
			@Required String price, String type, String productUrl, boolean addToCurrentList) {
		try {
			Logger.warn(Arrays.toString(new String[] { descr, story, imageUrl, "" + price, type }));
			Product product = new Product(descr, story, imageUrl, null, type, new Date());
			product.productUrl = productUrl;
			setPrice(product, price);

			String accessToken = Session.current().get(User.JSON_TAG_ACCESS_TOKEN);
			if (accessToken != null) {
				User user = Cache.get(accessToken, User.class);
				if (user != null) {
					product.addedBy = user.id;
				}
			}

			fetchImage(product, imageUrl);

			product.save();

			Logger.warn("Add product to current list: " + addToCurrentList);
			if (addToCurrentList && session.contains(Application.SESSION_PARAM_CURRENT_LIST)) {
				Long listId = new Long(session.get(Application.SESSION_PARAM_CURRENT_LIST));
				ProductsList list = ProductsList.findById(listId);
				list.addProduct(product.id);
			}

			renderText("true");
		} catch (Throwable e) {
			e.printStackTrace();
			renderText("false");
		}
	}

	private static void setPrice(Product product, String unparsedPrice) {
		Pattern DECIMAL = Pattern.compile("(\\d+\\.?\\d*)");
		Pattern CURRENCY = Pattern.compile("(\\$|£|€|¥)");
		Matcher decimalMatcher = DECIMAL.matcher(unparsedPrice);
		if (decimalMatcher.find()) {
			product.price = Float.parseFloat(decimalMatcher.group(1));
		}
		Matcher currencyMatcher = CURRENCY.matcher(unparsedPrice);
		if (currencyMatcher.find()) {
			product.currency = currencyMatcher.group(1);
		}
	}

	private static String fetchImage(Product product, String url) throws IOException {
		HttpResponse response = WS.url(url).get();

		Blob from = new Blob();
		from.set(response.getStream(), response.getContentType());

		File toInFeed = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInFeed, Constants.PRODUCT_IMAGE_IN_FEED, -1);
		product.imageFeed = toInFeed.getName();

		File toInDetails = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInDetails, Constants.PRODUCT_IMAGE_IN_PROD_DETAILS, -1);
		product.imageDetails = toInDetails.getName();

		File toInList = new File(Blob.getStore(), Codec.UUID());
		Images.resize(from.getFile(), toInList, Constants.PRODUCT_IMAGE_IN_LIST, -1);
		product.imageList = toInList.getName();

		return toInFeed.getName();
	}

	public static void index() {
		render();
	}

	public static void imageFeed(long id) {
		Product p = Product.findById(id);
		response.setHeader("Cache-Control", "max-age=3600");
		renderBinary(new File(Blob.getStore(), p.imageFeed));
	}

	public static void imageDetails(long id) {
		Product p = Product.findById(id);
		response.setHeader("Cache-Control", "max-age=3600");
		renderBinary(new File(Blob.getStore(), p.imageDetails));
	}

	public static void imageList(long id) {
		Product p = Product.findById(id);
		response.setHeader("Cache-Control", "max-age=3600");
		renderBinary(new File(Blob.getStore(), p.imageList));
	}

	public static void details(Long id, Long listId, boolean clickedFromFeed) {
		Product product = Product.findById(id);
		User user = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);

		UserActionsInProductList userActionInList = null;
		boolean shouldHaveAddToListButton = true;
		String likePercentage = "0";
		String dislikePercentage = "0";
		if (clickedFromFeed) {
			// user clicked on a product in feed(not list)
			ProductsList list = ProductsList.findById(listId);
			if (list != null) {
				for (ProductInList pil : list.productsInList) {
					if (pil.productId.equals(id)) {
						shouldHaveAddToListButton = false;
						break;
					}
				}
			}
		} else {
			// user cliked on a product from list
			VotingContainer vc = calculateUserActions(listId, product.id, user.id);
			userActionInList = vc.userActionsInProductList;
			likePercentage = vc.likePercentage;
			dislikePercentage = vc.dislikePercentage;
		}
		render(product, userActionInList, shouldHaveAddToListButton, likePercentage,
				dislikePercentage);
	}

	public static VotingContainer calculateUserActions(Long listId, Long productId, Long userId) {
		String likePercentage = "0";
		String dislikePercentage = "0";
		JPAQuery query = UserActionsInProductList.find(
				"user_action != 'in' AND list_id = ? AND product_id = ?", listId, productId);
		List<UserActionsInProductList> userActions = query.fetch();
		UserActionsInProductList userActionInList = new UserActionsInProductList(listId, productId,
				userId, "not_voted");
		if (userActions != null) {
			int likes = 0;
			int dislikes = 0;
			for (UserActionsInProductList ua : userActions) {
				if (ua.userId.equals(userId) && !"in".equals(ua.userAction)) {
					userActionInList = ua;
				}
				if ("y".equals(ua.userAction)) {
					likes++;
				}
				if ("n".equals(ua.userAction)) {
					dislikes++;
				}
			}
			int total = likes + dislikes;
			if (total != 0) {
				double like = total == 0 ? 0 : likes / total;
				likePercentage = DECIMAL_FORMAT.format(like);
				dislikePercentage = DECIMAL_FORMAT.format(1 - like);
			}
		}
		return new VotingContainer(userActionInList, likePercentage, dislikePercentage);
	}

	public static class VotingContainer {
		public UserActionsInProductList userActionsInProductList;
		public String likePercentage;
		public String dislikePercentage;

		public VotingContainer(UserActionsInProductList userActionsInProductList,
				String likePercentage, String dislikePercentage) {
			this.userActionsInProductList = userActionsInProductList;
			this.likePercentage = likePercentage;
			this.dislikePercentage = dislikePercentage;
		}

	}

	private static final String SELECT_PRODUCTS = "SELECT p.* " + "FROM products AS p "
			+ "LEFT JOIN " + "(SELECT pc.product_id as pid, c.weight as weight FROM "
			+ "products_subcategories AS pc "
			+ "INNER JOIN user_subcategories AS uc ON pc.subcategory_id = uc.subcategory_id "
			+ "INNER JOIN subcategories AS s ON s.id = pc.subcategory_id "
			+ "INNER JOIN categories AS c ON c.id = s.category_id "
			+ "WHERE uc.user_id = ?) AS second " + "ON p.id = pid " + "GROUP BY p.id "
			+ "ORDER BY sum(weight) DESC LIMIT ";

	public static List<Product> getOrderedList(long listId) {
		return getOrderedList(listId, 0);
	}

	public static void feed(long userId) {
		if (userId <= 0) {
			User me = Cache.get(session.get(SESSION_PARAM_ACCESS_TOKEN), User.class);
			userId = me.id;
			if (userId > 0) {
				Products.feed(userId);
			} else {
				Logger.error("Unable to define user id: " + userId);
			}
		}

		JPAQuery query = Product.find("addedBy = ? ORDER BY addedWhen DESC", userId);
		List<Product> products = query.fetch();

		String nextPageUrl = String.format("/%d/feedPage", userId);

		renderArgs.put("user", User.findById(userId));
		renderArgs.put("productPagesCount", 100);
		renderArgs.put("isFeedSelected", true);

		render(products, nextPageUrl);
	}

	public static void feedPage(long userId, int page) {
		page = (page < 1) ? 1 : page;
		JPAQuery query = Product.find("added_by_uid = ?", userId);
		List<Product> products = query.fetch(page, Constants.PRODUCTS_PAGE_SIZE);
		render(products);
	}

	public static List<Product> getOrderedList(long listId, long start) {
		List<Product> list = new ArrayList<Product>();
		ProductsList pl = ProductsList.findById(listId);
		if (pl == null) {
			return list;
		}
		ResultSet rs = DB.executeQuery(SELECT_PRODUCTS.replace("?", String.valueOf(pl.targetId))
				+ start + ", " + Constants.PRODUCTS_PAGE_SIZE);
		try {
			while (rs.next()) {
				Product p = Product.createFromResultSet(rs);
				list.add(p);
			}
			return list;
		} catch (Exception e) {
			return list;
		}
	}

	public static void productProfile(Long productId) {
		Product product = Product.findById(productId);
		Map<Category, List<Subcategory>> categories = Subcategory.getTree(product);
		render(categories, product);
	}

	public static void addCategories(List<Long> catIds) {
		if (catIds == null || catIds.isEmpty()) {
			renderText("Categories are empty");
		}

		Long productId = new Long(session.get(SESSION_PARAM_CURRENT_PRODUCT));

		Product product = Product.findById(productId);
		if (product == null) {
			renderJSON(new ErrorResult());
		}

		DB.execute("delete from products_subcategories where product_id = " + productId);
		for (Long catId : catIds) {
			new ProductCategories(productId, catId).save();
		}

		productProfile(productId);
	}
}
