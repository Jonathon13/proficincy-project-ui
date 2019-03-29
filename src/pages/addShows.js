import React, { Component } from 'react'
import {apiURL} from '../config/coms'
import { Redirect } from 'react-router-dom'
// import {render, handleChange , handleSubmit} from 'react-dom'

    export default class extends Component {
    state = {
        redirect : false,
        Name: '',
        Creator: '',
        Producer: '',
        Favorite_Character: '',
        Still_Being_Produced: '',
        Number_of_Seasons: '',
        imageURL: ''

    }

    createShow = async (Show) => {
        await fetch(`${apiURL}/Shows`, {
            method: 'post',
            body: JSON.stringify(Show)
        }).then( res => res.json() )
        .then( data => console.log(data))
        .catch( err => console.log(err))
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const Show = {
            Name: this.state.Name,
            Creator: this.state.Creator,
            Producer: this.state.Producer,
            Favorite_Character: this.state.Favorite_Character ,
            Still_Being_Produced: this.state.Still_Being_Produced,
            Number_of_Seasons: this.state.Number_of_Seasons,
            imageURL: this.state.imageURL


        }
        await this.createShow(Show)
        this.setState({redirect:true})
    }
    
    handleChange = (event) => {
        this.setState(
            { [event.target.name] : event.target.value }
        )
    }

    render() {
        return (
            <fieldset>
                <legend>Add Show</legend>
                <form onSubmit={this.handleSubmit}>
                    <input name='Name'
                        type='text' 
                        placeholder='Input name here' 
                        value={this.state.Name}
                        onChange={this.handleChange}/>
                    <input name='Creator'
                        type='text'
                        placeholder='Creator'
                        value={this.state.Creator}
                        onChange={this.handleChange} />
                    <input name='Producer'
                        type='text'
                        placeholder='Producer'
                        value={this.state.displayName}
                        onChange={this.handleChange} />
                    <input name='Favorite_Character'
                        type='text'
                        placeholder='Favorite Character'
                        value={this.state.Favorite_Character}
                        onChange={this.handleChange} />
                <input name='Still_Being_Produced'
                        type='Still_Being_Produced'
                        placeholder='Still Being Produced'
                        value={this.state.Still_Being_Produced}
                        onChange={this.handleChange} />
                    <input name='Number_of_Seasons'
                        type='Number_of_Seasons'
                        placeholder='Number of Seasons'
                        value={this.state.Number_of_Seasons}
                        onChange={this.handleChange} />
                    <input name='imageURL'
                        type='imageURL'
                        placeholder='Show Cover Photo'
                        value={this.state.imageURL}
                        onChange={this.handleChange} />
                    
                    <input type='submit'/>
                
                </form>
                { this.state.redirect ? <Redirect to='/'/> : null}
            </fieldset>
        )
    }
}