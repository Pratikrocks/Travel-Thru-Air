import React, { Component } from 'react'
import FlightService from "../api/index"

export default class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flightname: "",
            departureCity: "",
            arrivalCity: "",
            cost: ""
        }
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this)
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.saveFlight = this.saveFlight.bind(this)
        this.cancel = this.cancel.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event) {
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name] : value
        })

    }

    saveFlight(event) {
        event.preventDefault()
        console.log(this.state)
        let flight = {
                            "flightname":this.state.flightname, 
                            "departureCity":this.state.departureCity, 
                            "arrivalCity": this.state.arrivalCity,
                            "cost": this.state.cost
                    }
        console.log(JSON.stringify(flight))
        FlightService.createFlights(flight).then(res=>{
            console.log(res)
            this.props.history.push('/admin')
        })
    }

    cancel() {
        this.setState({
            flightname: "",
            departureCity: "",
            arrivalCity: "",
            cost: ""
        })
        // this.props.history.push("/admin");
    }

    changeFirstNameHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            firstName: event.target.value
        })
    } 

    changeLastNameHandler = (event) => {
        event.preventDefault()
        this.setState({
            lastName: event.target.value
        })
    }

    changeEmailIdHandler = (event) => {
        event.preventDefault()
        this.setState({
            emailId: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Flights</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Flights Name</label>
                                        <input placeholder="First Name" name="flightname" 
                                        className="form-control" value={this.state.firstName} 
                                        onChange={this.changeHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Departure City</label>
                                        <input placeholder="Departure City" name="departureCity" 
                                        className="form-control" value={this.state.departureCity} 
                                        onChange={this.changeHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Arrival City</label>
                                        <input placeholder="Arrival City" name="arrivalCity" 
                                        className="form-control" value={this.state.arrivalCity} 
                                        onChange={this.changeHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Cost</label>
                                        <input placeholder="Cost" name="cost" 
                                        className="form-control" value={this.state.cost} 
                                        onChange={this.changeHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveFlight}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
