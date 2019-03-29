import React, { Component, Fragment } from 'react'
import { Route } from "react-router-dom";
import Home from './Home'
import addShows from './addShows'
import editShows from './editShows'

export default class extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={addShows} />
                <Route path="/edit" component={editShows} />
                {/* <Route path="/delete" component={deleteShows} /> */}
            </Fragment>
        )
    }
}