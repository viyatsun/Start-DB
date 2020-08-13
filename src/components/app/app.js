import React, {Component} from 'react';

import Header from '../header';
import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBounry from '../error-boundry';
import Row from '../row';
import ItemDetails from '../item-details';


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

        const{getPerson, 
              getStarship,
              getPersonImage,
              getStarshipImage} = this.swapiService;
              
        const personDetails = (
            <ItemDetails itemId={5}
            getData= {getPerson}
            getImageUrl ={getPersonImage}
            />
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
            getData= {getStarship}
            getImageUrl={getStarshipImage}
            />
        );

        return(
         <ErrorBounry>
            <div className = 'aplication'>
                <Header/>
                <Row left={personDetails} 
                    right= {starshipDetails}/>
            </div>
        </ErrorBounry>
    )}
};
