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
            
        </div>
    )}
};
