import axios from 'axios';

const FLIGHTS_API_BASE_URL = 'http://localhost:8080/api/v1/';

class FlightService {
    getFlights() {
        return axios.get(FLIGHTS_API_BASE_URL + "flights");
    }

    createFlights(flight) {
        return axios.post(FLIGHTS_API_BASE_URL + "admin/addFlights", flight);
    }

    getOffers(id) {
        console.log(FLIGHTS_API_BASE_URL + "fetchOffer/" + id)
        return axios.get(FLIGHTS_API_BASE_URL + "fetchOffer/" + id);
    }
    deleteOffers(id) {
        return axios.delete(FLIGHTS_API_BASE_URL + "/admin/deleteOffer/" + id);
    }
    setOffers(offer) {
        return axios.put(FLIGHTS_API_BASE_URL+"/admin/addOffers/" + offer.flightId, offer)
    }
    deletePlanes(id) {
        return axios.delete(FLIGHTS_API_BASE_URL + "/admin/deleteFlight/" + id);
    }
    getFlightsByName(name) {
        return axios.get(FLIGHTS_API_BASE_URL + "getFlightsName/" + name)
    }
    getFlightsByDepartureCity(name) {
        return axios.get(FLIGHTS_API_BASE_URL + "getFlightsDepartureCity/" + name)
  
    }
}

export default new FlightService();