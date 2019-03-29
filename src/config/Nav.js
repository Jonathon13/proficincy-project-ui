import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class extends Component {
    state = {}
    render() {
        return (
            <div>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to='/create'>Create Shows</Link></li>
                    <li><Link to='/edit'>Edit shows</Link></li>
                    {/* <li><Link to='/delete'>Delete shows</Link></li> */}
            </div>
        )
    }
}