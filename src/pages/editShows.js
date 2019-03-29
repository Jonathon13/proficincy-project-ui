import React, { Component } from 'react'
import {apiURL} from '../config/coms'
import { Redirect } from 'react-router-dom'


    export default class extends Component {
    state = {
        Name: 'this.props.Shows.Name',
        Creator: 'this.props.Shows.Creator',
        Producer: 'this.props.Shows.Producer',
        Favorite_Character: 'this.props.Shows.Favorite_Character',
        Still_Being_Produced: 'this.props.Shows.Still_Being_Produced',
        Number_of_Seasons: 'this.props.Shows.Number_of_Seasons',
        imageURL: 'this.props.Shows.imageURL'

    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(`${apiURL}/Shows/${this.props.Shows._id}`, {
            method : "PUT",
            body: JSON.stringify(this.state)
        }).then( res => console.log(res.json()))
        .then( () => this.setState({ 
        Name: '',
        Creator: '',
        Producer: '',
        Favorite_Character: '',
        Still_Being_Produced: '',
        Number_of_Seasons: '',
        imageURL: ''

        }))
        .then(() => this.props.closeUpdate())
        .then( () => this.props.refresh())
        .catch(err => console.log(err))
    }
    render() {
        return (
            <fieldset>
                
                <form onSubmit={this.handleSubmit}>
                    <legend>Edit Show</legend>
                        <input type='text'
                            name='Name'
                            placeholder='Insert name here'  
                            value={this.state.Name}
                            onChange={this.handleChange}/>
                    <br/>
                        <input name='Creator'
                            type='text'
                            placeholder='Creator'
                            value={this.state.Creator}
                            onChange={this.handleChange} />
                    <br/>
                        <input name='Producer'
                            type='text'
                            placeholder='Producer'
                            value={this.state.displayName}
                            onChange={this.handleChange} />
                    <br/>
                        <input name='Favorite_Character'
                            type='text'
                            placeholder='Favorite Character'
                            value={this.state.Favorite_Character}
                            onChange={this.handleChange} />
                    <br/>
                        <input name='Still_Being_Produced'
                            type='text'
                            placeholder='Still Being Produced?'
                            value={this.state.Still_Being_Produced}
                            onChange={this.handleChange} />
                    <br/>
                        <input name='Number_of_Seasons'
                            type='text'
                            placeholder='Number of Seasons'
                            value={this.state.Number_of_Seasons}
                            onChange={this.handleChange} />
                    <br/>
                        <input name='imageURL'
                            type='text'
                            placeholder='Show Cover Photo'
                            value={this.state.imageURL}
                            onChange={this.handleChange} />
                    <br/>
                        <input type='submit' value="updateShows"/>
                
                </form>
                { this.state.redirect ? <Redirect to='/'/> : null}
            </fieldset>
        )
    }
}