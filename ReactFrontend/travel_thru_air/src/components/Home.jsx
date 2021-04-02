import React, { Component } from 'react'
import FlightService from "../api/index"
import {Button} from "react-bootstrap";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flights: []
        }
        this.viewOffer = this.viewOffer.bind(this)
        this.addOffer = this.addOffer.bind(this)
        this.dropPlane = this.dropPlane.bind(this)
        this.searchName = this.searchName.bind(this)
        this.searchDep = this.searchDep.bind(this)
    }

    dropPlane = flight => {
        FlightService.deletePlanes(flight.flightId)
        .then(res => {
            this.props.history.push("/admin")
            console.log(res)
        })
    }

    searchName() {
        if(this.props.user === "admin")this.props.history.push("/admin/searchN")
        else this.props.history.push("/searchN")
    }

    searchDep () {
        if(this.props.user === "admin")this.props.history.push("/admin/searchD")
        else this.props.history.push("/searchD")
    }

    addOffer = flight => {
        this.props.history.push("/admin/addOffer?id="+flight.flightId+"&flightname="+flight.flightname+"&u=admin")
    }

    viewOffer = flight => {
        console.log(flight)
        let id = 2
        if(this.props.user === "admin") this.props.history.push("/admin/viewOffer?id="+flight.flightId+"&flightname="+flight.flightname+"&u=admin")
        else this.props.history.push("/viewOffer?id="+flight.flightId+"&flightname="+flight.flightname+"&u=user")
    }

    componentDidMount() {
        FlightService.getFlights().then((res)=> {
            this.setState({
                flights: res.data
            })
        })
        
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Available Flights</h2>
                <h2 className="text-center"><Button variant="dark" className="text-center" onClick={this.searchName}>Search Flights By Name</Button></h2>
                <h2 className="text-center"><Button variant="dark" className="text-center" onClick={this.searchDep}>Search Flights By Departure City</Button></h2>
                {console.log(this.state.flights)}
                <div className="row">
                    {/* <div className="btn btn-primary" onClick={}>Add Employee</div>  */}
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Flight First</th>
                                <th>Departure City</th>
                                <th>Arrival City</th>
                                <th>Price</th>
                                <th>Offers</th>
                                {this.props.user === "admin" ? <th>Add Offer</th> : null}
                                {this.props.user === "admin" ? <th>Remove Plane</th> : null}
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.flights.map(
                                    flight => (
                                        <tr key={flight.flightId}>
                                            <td>{flight.flightname}</td>
                                            <td>{flight.departureCity}</td>
                                            <td>{flight.arrivalCity}</td>
                                            <td>{flight.cost}</td>
                                            <td><Button variant="success" onClick={() => this.viewOffer(flight)} value={flight}>View Offers</Button></td>
                                            {this.props.user === "admin" ? <td ><Button variant="info" onClick={() => this.addOffer(flight)}>Add</Button></td> : null}
                                            {this.props.user === "admin" ? <td ><Button variant="danger" onClick={() => this.dropPlane(flight)}>Drop</Button></td> : null}
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
