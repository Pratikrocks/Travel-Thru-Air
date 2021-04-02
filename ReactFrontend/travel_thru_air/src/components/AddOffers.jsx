import React, { Component } from 'react'
import FlightService from "../api/index"

export default class AddOffers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "flightId":new URLSearchParams(this.props.location.search).get("id"),
            "discount":"",
            "offerDuration":""
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.saveOffer = this.saveOffer.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    changeHandler(event) {
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name] : value
        })

    }

    cancel() {

    }

    saveOffer(e) {
        e.preventDefault()
        FlightService.setOffers(this.state)
        .then(res => {
            if(res.status == 200)
                this.props.history.push("/admin")
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add/Update Offers</h3>
                            <h3 className="text-center">{new URLSearchParams(this.props.location.search).get("flightname")}</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Add Discount</label>
                                        <input placeholder="Add Discount" name="discount" 
                                        className="form-control" value={this.state.discount} 
                                        onChange={this.changeHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Duration</label>
                                        <input placeholder="Duration in Hours" name="offerDuration" 
                                        className="form-control" value={this.state.offerDuration} 
                                        onChange={this.changeHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOffer}>Save</button>
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
