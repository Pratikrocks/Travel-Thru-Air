import React, { Component } from 'react'
import FlightService from "../api/index"
import {Button} from "react-bootstrap"

export default class SearchD extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "departureCity": "",
            "flight": ""
        }
        this.search = this.search.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    search(e) {
        e.preventDefault()
        FlightService.getFlightsByDepartureCity(this.state.departureCity)
        .then(res => {
            console.log(res)
             if(res.data.length) {
                 console.log(res.data)
                 this.setState({
                     flight : res.data,
                     departureCity: ""
                 })
             }
        })
    }

    render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Search By Departure City</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter Name:</label>
                                        <input placeholder="Enter Name" name="departureCity" 
                                        className="form-control" value={this.state.departureCity} 
                                        onChange={this.changeHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.search}>Search</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>


                            </div>
                        </div>
                    </div>

                    {
                         this.state.flight !== "" ?
                    <table className="table table-striped table-bordered">
                        
                        
                        <thead>
                            <tr>
                                <th>Flight First</th>
                                <th>Departure City</th>
                                <th>Arrival City</th>
                                <th>Price</th>
                                <th>Offers</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.flight !== "" ?
                                this.state.flight.map(
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

                                :

                                null
                            }
                        </tbody>
                    </table> : null

                    }
                </div>
        )
    }
}
