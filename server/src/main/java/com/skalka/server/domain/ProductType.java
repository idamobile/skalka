package com.skalka.server.domain;

public enum ProductType {
	STORY("story"), IMAGE("image"), IMAGE_WITH_STORY("image_with_story");

	private String value;

	private ProductType(String value) {
		this.value = value;
	}

	public static ProductType parse(String value) {
		if (STORY.value.equals(value)) {
			return STORY;
		} else if (IMAGE.value.equals(value)) {
			return IMAGE;
		} else if (IMAGE_WITH_STORY.equals(value)) {
			return IMAGE_WITH_STORY;
		}
		return null;
	}

	@Override
	public String toString() {
		return value;
	}
}
