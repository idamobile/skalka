package com.skalka.server.domain;

import java.math.BigInteger;

import org.codehaus.jackson.annotate.JsonProperty;

public class Product {

	private BigInteger pid;
	private String description;
	private String story;
	private String imageUrl;
	private double price;
	private ProductType type;

	public Product() {
	}

	@JsonProperty(value = "pid")
	public BigInteger getPid() {
		return pid;
	}

	public void setPid(BigInteger pid) {
		this.pid = pid;
	}

	@JsonProperty(value = "description")
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@JsonProperty(value = "story")
	public String getStory() {
		return story;
	}

	public void setStory(String story) {
		this.story = story;
	}

	@JsonProperty(value = "type")
	public ProductType getType() {
		return type;
	}

	public void setType(ProductType type) {
		this.type = type;
	}

	@JsonProperty(value = "image_url")
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@JsonProperty(value = "price")
	public double getPrice() {
		return price;
	}

	@Override
	public String toString() {
		return "Product [pid=" + pid + ", description=" + description
				+ ", story=" + story + ", type=" + type + ", image_url=" + imageUrl
				+ ", price=" + price + "]";
	}

}
