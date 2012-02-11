package com.skalka.server.domain;

public enum Gender {
	MALE("male"), FEMALE("female");

	private String value;

	private Gender(String value) {
		this.value = value;
	}

	public static Gender parse(String value) {
		if (MALE.value.equals(value)) {
			return MALE;
		} else if (FEMALE.value.equals(value)) {
			return FEMALE;
		}
		return null;
	}

	@Override
	public String toString() {
		return value;
	}
}
