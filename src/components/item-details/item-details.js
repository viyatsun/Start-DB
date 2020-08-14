import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{field}</span>
    </li>
  );
};

export {
  Record
};


export default class ItemDetails extends Component {
  
  swapiService = new SwapiService();  

  state = {
    item:null,
    image:null
  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId){
      this.updatePerson();
    }  
  }

  updatePerson() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item)=>{
        this.setState({
          item,
          image:getImageUrl(item)
        })
      })
  }

  
  
  render() {
    
    const {item, image} = this.state;

    if(!item) {
      return <span>Select a item from a list</span>;
    }


    const {name, gender,
              birthYear, eyeColor} = this.state.item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} 
          />

        <div className="card-body">
            <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child)=>{
                return child
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

