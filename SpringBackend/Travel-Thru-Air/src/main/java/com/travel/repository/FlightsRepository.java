package com.travel.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travel.model.Flights;
import com.travel.model.Offers;

@Repository
public interface FlightsRepository extends JpaRepository<Flights, Integer> {

	List<Flights> findAllBydepartureCity(String city);


	List<Flights> findAllByflightname(String name);
	
}
