import React, {Component} from 'react';
import Header from '../header';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBounry from '../error-boundry';
import Row from '../row';
import ItemDetails from '../item-details';
import Record from '../item-details';

import './app.css';



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
            getImageUrl ={getPersonImage}>
                <Record field = "gender" label = "Gender" />
                <Record field = "eyeColor" label = "Eye Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
            getData= {getStarship}
            getImageUrl={getStarshipImage}>

            </ItemDetails>
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
