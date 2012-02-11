package com.skalka.server.domain;

import java.math.BigInteger;

import org.codehaus.jackson.annotate.JsonProperty;

public class User {

	public enum Gender {
		MALE, FEMALE
	}

	private BigInteger uid;
	private BigInteger facebookId;

	private String firstName;
	private String lastName;

	private Gender gender;

	private String imageUrl;

	public User() {
	}

	@JsonProperty(value = "uid")
	public BigInteger getUid() {
		return uid;
	}

	public void setUid(BigInteger uid) {
		this.uid = uid;
	}

	@JsonProperty(value = "fb_uid")
	public BigInteger getFacebookId() {
		return facebookId;
	}

	public void setFacebookId(BigInteger facebookId) {
		this.facebookId = facebookId;
	}

	@JsonProperty(value = "first_name")
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@JsonProperty(value = "last_name")
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@JsonProperty(value = "gender")
	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	@JsonProperty(value = "image_url")
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "User [uid=" + uid + ", facebookId=" + facebookId + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", gender=" + gender + ", imageUrl=" + imageUrl + "]";
	}

}
