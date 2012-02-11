package com.skalka.server.domain;

import java.math.BigInteger;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.codehaus.jackson.annotate.JsonProperty;

public class User {

	private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

	private BigInteger uid;
	private BigInteger facebookId;

	private String firstName;
	private String lastName;

	private Date birthDate;

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

	public Date getBirthDate() {
		return birthDate;
	}

	@JsonProperty(value = "birth_date")
	public String getBirthDateAsString() {
		if (birthDate == null) {
			return null;
		}
		return DATE_FORMAT.format(birthDate);
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	@Override
	public String toString() {
		return "User [uid=" + uid + ", facebookId=" + facebookId + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", birthDate=" + birthDate + ", gender=" + gender
				+ ", imageUrl=" + imageUrl + "]";
	}

}
