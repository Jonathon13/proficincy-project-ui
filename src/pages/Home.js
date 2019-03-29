import React, { Component } from 'react'
import {apiURL} from '../config/coms'
// import { WSAECONNREFUSED } from 'constants';


// API Connection / fetch()
// List of Users in Simple format
export default class extends Component {
    state = {
        getShows: [] 
    }

    getShows = async () => {
        await fetch(`${apiURL}/Shows`)
            .then( res => res.json())
            .then( data => data.map( Shows => <h5>{Shows.Name}</h5>))
            .then( Shows => this.setState({ Shows }))
            .catch( err => console.log(err))
    }

    componentDidMount(){
        this.getShows()
    }

    render() {
        return (
            <div>
                <h3>Please feel free to use the create show page to add your favorite shows to the website</h3>
                <h3>List of shows currently on this site</h3>
                <div id='list'>
                    {this.state.getimageURL}
                    {this.state.getShows}
                </div>
            </div>
        )
    }
}