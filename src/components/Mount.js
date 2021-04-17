import React from 'react';

const ComponentDidMount = () => {
   ComponentDidMount() {
       fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar+bordeaux+france&key=AIzaSyDF2ToWMK-FKlARxPrFxloh6BBXwYlUgXc').
       then(reponse => response.json())
       .then(bar => console.log(bar));
   }
};

export default ComponentDidMount;