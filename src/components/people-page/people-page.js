import React, {Component} from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-deteils';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 5,
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson: selectedPerson
        })
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                    getData = {this.swapiService.getAllPeople}>
                        {(i)=>(
                            `${i.name}  (${i.gender}, ${i.birthYear})`
                        )}
            </ItemList>
        )

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId = {this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (
            
                <Row left = {itemList} right = {personDetails}/>
            
        )

    }
}