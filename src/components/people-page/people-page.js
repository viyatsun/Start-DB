import React, {Component} from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-deteils';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 5,
        hasError:false
    }

    componentDidCatch () {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson: selectedPerson
        })
    }

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                    getData = {this.swapiService.getAllPeople}
                    renderItems = {({name,gender,birthYear})=>`${name}  (${gender}, ${birthYear})`}/>
        )

        const personDetails = (
            <PersonDetails personId = {this.state.selectedPerson}/>
        )

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <Row left = {itemList} right = {personDetails}/>
        )

    }
}