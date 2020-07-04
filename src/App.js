import React, { Component } from 'react'
import {robots} from './robots'
import List from './List'
import Search from './Search'
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render(){
        const filtered = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>A V E N G E R S</h1>
                <Search searchChange={this.onSearchChange}/>
                 <List robots={filtered}/>
            </div>
        )
    }
}
export default App;