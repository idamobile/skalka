package utils.html_parser;

import java.net.URL;
import java.util.ArrayList;

public class ParsedProductData {

	private enum TYPE {
		image, image_with_text, text_only
	}

	private String name;
	private ArrayList<URL> imageUrls = new ArrayList<URL>();
	private String price;
	private TYPE type = TYPE.image;
	private boolean error = false;

	public boolean isError() {
		return error;
	}

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

	public void setPrice(String price) {
		this.price = price;
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
