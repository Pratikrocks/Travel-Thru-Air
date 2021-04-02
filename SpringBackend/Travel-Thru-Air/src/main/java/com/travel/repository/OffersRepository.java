package com.travel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travel.model.Offers;


@Repository
public interface OffersRepository extends JpaRepository<Offers, Integer> {

	Offers findByflightId(Integer id);

}
