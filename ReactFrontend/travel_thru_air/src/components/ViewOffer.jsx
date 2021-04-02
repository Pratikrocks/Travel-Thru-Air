import React, { Component } from 'react'
import FlightService from "../api/index"
import {Button} from "react-bootstrap"

export default class ViewOffer extends Component {
    constructor(props) {
        super(props)
        // this.query = new URLSearchParams(useLocation().search);
        this.state = {
            Offer: "",
        }
        this.removeOffer = this.removeOffer.bind(this)
        this.updateOffer = this.updateOffer.bind(this)
    }

    updateOffer() {
        this.props.history.push("/admin/addOffer?id="+this.state.Offer.flightId+"&flightname="+new URLSearchParams(this.props.location.search).get("flightname"))
    }

    componentDidMount() {
        FlightService.getOffers(new URLSearchParams(this.props.location.search).get("id"))
            .then((res)=>{
                this.setState({
                    Offer : res.data
                })
            })

    }

    removeOffer() {
        FlightService.deleteOffers(this.state.Offer.offerId)
        .then(res=>
            {
                console.log(res)
                this.props.history.push("/admin")
            }
        )
    }
// <h3 className="text-center">{new URLSearchParams(this.props.location.search).get("flightname")}</h3>

    render() {
        const offer = this.state.Offer
        return (
            <div className="container">
                {console.log(offer.offerId)}
                <h2>{ offer.offerId !== undefined ? <h2>Valid Offer for <b>{new URLSearchParams(this.props.location.search).get("flightname")} </b></h2> : null}</h2>
                {
                    this.state.Offer !== "" ? 
                        
                            <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Flight Id</th>
                                <th>Discount</th>
                                <th>Offer Duration</th>
                                {new URLSearchParams(this.props.location.search).get("u") === "admin" ?<th>Update Offer</th>:null}
                                {new URLSearchParams(this.props.location.search).get("u") === "admin" ?<th>Remove Offer</th>:null}
                            </tr>
                        </thead>

                        <tbody>
                            {                               
                                <tr key={offer.offerId}>
                                    <td>{offer.flightId}</td>
                                    <td>{offer.discount}</td>
                                    <td>{offer.offerDuration}</td>
                                    {new URLSearchParams(this.props.location.search).get("u") === "admin" ? <td><Button variant="info" onClick={this.updateOffer}>Update</Button></td> : null}
                                    {new URLSearchParams(this.props.location.search).get("u") === "admin" ? <td><Button variant="danger" onClick={this.removeOffer}>Remove</Button></td>: null}
                                </tr>                            
                                
                            }
                        </tbody>
                    </table>
                       
                        : 
                        <h1>
                            Sorry Offer not available
                        </h1>
                }
            </div>
        )
    }
}
