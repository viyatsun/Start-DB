import React from 'react';

import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-deteils';
import RandomPlanet from '../random-planet';

const App = () => {
    return (
        <div>
            <Header/>
            <RandomPlanet/>
            <ItemList/>
            <PersonDetails/>
        </div>
    )
};

export default App; 