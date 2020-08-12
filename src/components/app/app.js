import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import './app.css';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-deteils';
import SwapiService from '../../services/swapi-service';


export default class App extends Component {

    swapiService = new SwapiService;
    
    state = {
        hasError: false
    }

    componentDidCatch () {
        this.setState({
            hasError: true
        })
    }
    
    render (){

        if (this.setState.hasError) {
            return <ErrorIndicator/>
        }

        return(
        <div className = 'aplication'>
            <Header/>
            <RandomPlanet/>
            <PeoplePage/>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPlanets}
                    renderItems = {(item)=>(
                        <span>{item.name} <button>!</button></span>
                    )}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId = {this.state.selectedPerson}/>
                </div>
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllStarships}
                    renderItems = {(item)=>item.name}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId = {this.state.selectedPerson}/>
                </div>
            </div>
            
        </div>
    )}
};
