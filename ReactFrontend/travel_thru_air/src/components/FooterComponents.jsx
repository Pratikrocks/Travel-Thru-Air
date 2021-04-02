import React, { Component } from 'react'
import { Router } from 'react-router'

// let hashHistory = Router.hashHistory

export default class FooterComponents extends Component {
    constructor(props) {
        super(props)
        this.changeToAdmin = this.changeToAdmin.bind(this)
    }

    changeToAdmin() {
        this.props.history.push("/admin")
    }    

    render() {
        return (
            <div>
                
                <footer className="footer">
                    <span className="text-muted" onClick={this.changeToAdmin}>Click to get Admin Priviliges</span>
                </footer>
            </div>
        )
    }
}
