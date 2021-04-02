import React, { Component } from 'react'

export default class HeaderComponets extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">Travel Thru Air</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
