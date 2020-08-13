import React, {Component} from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: 5,
    };

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem: selectedItem
        })
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                    getData = {this.swapiService.getAllPeople}>
                        {(i)=>(
                            `${i.name}  (${i.gender}, ${i.birthYear})`
                        )}
            </ItemList>
        )

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedItem}/>
            </ErrorBoundry>
        );

        return (
                <Row left = {itemList} right = {itemDetails}/>
        )
    }
}