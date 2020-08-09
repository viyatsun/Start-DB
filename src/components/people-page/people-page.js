import React, {Component} from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-deteils';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {

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

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId = {this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}