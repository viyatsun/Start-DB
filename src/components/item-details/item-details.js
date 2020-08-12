import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';

export default class ItemDetails extends Component {
  
  swapiService = new SwapiService();  

  state = {
    item:null
  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId){
      this.updatePerson();
    }  
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((item)=>{
        this.setState({item})
      })
  }

  
  
  render() {
    if(!this.state.item) {
      return <span>Select a item from a list</span>;
    }

    const {id, name, gender,
              birthYear, eyeColor} = this.state.item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
            <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}