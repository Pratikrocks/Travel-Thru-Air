package com.travel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travel.model.Flights;
import com.travel.model.Offers;
import com.travel.repository.FlightsRepository;
import com.travel.repository.OffersRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class BaseController {
	@Autowired
	FlightsRepository flightRepo;
	
	@Autowired
	OffersRepository offerRepo;
	
	@GetMapping("/")
	public ResponseEntity<String> Welcome() {
		return ResponseEntity.ok("Welcome to Travel Thru Air");
	}
	
	
	@PostMapping("/admin/addFlights") 
	public Flights addFlights(@RequestBody Flights flight) {
		flightRepo.save(flight);
		return flight;
	}
	
	@GetMapping("/flights") 
	public List<Flights> getFilghts() {
		return flightRepo.findAll();
	}
	
	@GetMapping("/getFlightsName/{name}")
	public List<Flights> getFlightsByName(@PathVariable String name) {
		return flightRepo.findAllByflightname(name);
	}
	
	@GetMapping("/getFlightsDepartureCity/{city}")
	public List<Flights> getFlightsByDeparture(@PathVariable String city) {
		return flightRepo.findAllBydepartureCity(city);
	}
	
	@GetMapping("/fetchOffer/{id}")
	public Offers fetchOffer(@PathVariable Integer id) {
		Offers currentOffer = offerRepo.findByflightId(id);
		if(currentOffer == null) {
			return null;
		}
		return currentOffer;
	}
	
	@PutMapping("/admin/addOffers/{id}")
	public ResponseEntity<Offers> addOffer(@PathVariable Integer id, @RequestBody Offers offer) {
		
		Offers currentOffer = offerRepo.findByflightId(offer.getFLightId());
		
		if(currentOffer == null) {
			System.out.println("Returned null for id:" + id);
			currentOffer = new Offers();
			currentOffer.setOfferDuration(offer.getOfferDuration());
			currentOffer.setFlightId(offer.getFLightId());
			currentOffer.setDiscount(offer.getDiscount());
			Offers updatedOffer =  offerRepo.save(currentOffer);
			
			return ResponseEntity.ok(updatedOffer);
		} 
		currentOffer.setOfferDuration(offer.getOfferDuration());
		currentOffer.setFlightId(offer.getFLightId());
		currentOffer.setDiscount(offer.getDiscount());
				
		Offers updatedOffer =  offerRepo.save(currentOffer);
		
		return ResponseEntity.ok(updatedOffer);
	}
	
	@SuppressWarnings("unchecked")
	@DeleteMapping("/admin/deleteOffer/{id}")
	public ResponseEntity<String> deleteOffer(@PathVariable Integer id) {
		try {
			offerRepo.deleteById(id);
			return ResponseEntity.ok("Resource Deleted");
		} catch(Exception e) {
			return (ResponseEntity<String>) ResponseEntity.status(404);
		}
		
		
	}
	
	@SuppressWarnings("unchecked")
	@DeleteMapping("/admin/deleteFlight/{id}")
	public ResponseEntity<String> deleteFlights(@PathVariable Integer id) {
		try {
			flightRepo.deleteById(id);
			return ResponseEntity.ok("Flights Deleted");
		} catch(Exception e) {
			return (ResponseEntity<String>) ResponseEntity.status(404);
		}
		
		
	}
}
