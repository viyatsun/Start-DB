import React, {Component} from 'react';

import Header from '../header';
import ItemList from '../item-list';
import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBounry from '../error-boundry';
import Row from '../row';
import ItemDetails, {Record} from '../item-details/item-details';


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
              getStarshipImage,
              getAllPlanets,
              getAllPeople} = this.swapiService;
              
        const personDetails = (
            <ItemDetails itemId={5}
            getData= {getPerson}
            getImageUrl ={getPersonImage}>
                <Record field="gender" label ="Gender"/>
                <Record field="eyeColor" label ="EyeColor"/>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
            getData= {getStarship}
            getImageUrl={getStarshipImage}>
                <Record field="model" label ="Model"/>
                <Record field="length" label ="Length"/>
                <Record field="costInCredits" label ="Cost"/>
            </ItemDetails>
        );

        return(
         <ErrorBounry>
            <div className = 'aplication'>
                <Header/>
                <Row left={personDetails} 
                    right= {starshipDetails}/>
            </div>
            <ItemList 
                getData={getAllPlanets}
                onItemSelected={()=>{}}>
                    {({name})=><span>{name}</span>}
            </ItemList>
            <ItemList 
                getData={getAllPeople}
                onItemSelected={()=>{}}>
                    {({name})=><span>{name}</span>}
            </ItemList>
        </ErrorBounry>
    )}
};
