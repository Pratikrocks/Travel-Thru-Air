package com.travel.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "OFFERS")
public class Offers {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int offerId;
	
	private int flightId;
	
	private int discount;
	
	private int offerDuration;

	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}

	public int getFLightId() {
		return flightId;
	}

	public void setFlightId(int filghtId) {
		this.flightId = filghtId;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public int getOfferDuration() {
		return offerDuration;
	}

	public void setOfferDuration(int offerDuration) {
		this.offerDuration = offerDuration;
	}

	public Offers orElse(Object object) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
