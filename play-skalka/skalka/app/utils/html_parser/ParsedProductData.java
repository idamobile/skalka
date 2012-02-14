package utils.html_parser;

import java.net.URL;
import java.text.DecimalFormat;
import java.util.ArrayList;

public class ParsedProductData {

	private final static DecimalFormat DECIMAL_FORMAT = new DecimalFormat("#,##0.00");

	private enum TYPE {
		image, image_with_text, text_only
	}

	private String name;
	private ArrayList<URL> imageUrls = new ArrayList<URL>();
	private String price;
	private TYPE type = TYPE.image;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ArrayList<URL> getImageUrl() {
		return imageUrls;
	}

	public void addImageUrl(URL imageUrl) {
		this.imageUrls.add(imageUrl);
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = DECIMAL_FORMAT.format(price);
	}

	public TYPE getType() {
		return type;
	}

	public void setType(TYPE type) {
		this.type = type;
	}

	public String toString() {
		return "Name:" + name + "\nImageUrl:" + imageUrls + "\nprice:" + price + "\nType:" + type;
	}

}
