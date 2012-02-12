package com.skalka.server.html_parser;

import java.net.URL;
import java.util.ArrayList;

public class ProductData {

	private enum TYPE { IMAGE, IMAGE_WITH_TEXT, TEXT_ONLY }

	private String name;
	private ArrayList<URL> imageUrls = new ArrayList<URL>();
	private double price;
	private TYPE type;
	
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public TYPE getType() {
		return type;
	}

	public void setType(TYPE type) {
		this.type = type;
	}
	
	public String toString(){
		return "Name:" + name + "\nImageUrl:" + imageUrls + "\nprice:" + price + "\nType:" + type;
	}
	
}
