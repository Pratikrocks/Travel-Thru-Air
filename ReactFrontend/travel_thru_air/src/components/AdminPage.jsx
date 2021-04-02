import React, { Component } from 'react'
import { Button } from "react-bootstrap"
import "./css/AdminPage.css"
import FlightService from "../api/index"
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flights: []
        }
        this.addFlights = this.addFlights.bind(this)
        this.addOffers = this.addOffers.bind(this)
        this.addBack = this.addBack(this)
    }

    componentDidMount() {
        FlightService.getFlights().then((res)=> {
            this.setState({
                flights: res.data
            })
        })
        
    }

    addFlights() {
        this.props.history.push("/admin/addFlights")
    }

    addOffers() {
        this.props.history.push("/admin/addOffers")
    }
    addBack() {
        
    }

    render() {
        return (
            <>
            <div className="container mt-10 ">
                <br></br>
                <br></br>
                <div className=" h-100 mt-6">
                    <div className="position-relative h-100">
                        <div className="position-absolute top-left">
                            <Button type="button"  variant="primary" onClick={this.addFlights}>Add Flights</Button>
                        </div>
                        {/* <div class="position-absolute top-center">
                            <Button type="button" class="btn btn-primary" variant="secondary" onClick={this.addBack}>Return To Home</Button>
                        </div> */}
                        <div className="position-absolute top-right">
                            <Button type="button" className="btn btn-danger" variant="info" onClick={this.addOffers}>Add Offers</Button>
                        </div>   
                
                    </div>
                 </div>
                
            </div>
            <Router>
                <Switch>
                    <Route path="/admin" component={()=>(<Home user="admin" history={this.props.history}/>) } />
                </Switch>
                
            </Router>
            
            </>
        )
    }
}
