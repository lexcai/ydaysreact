import React from 'react';
import Navigation from '../components/Navigation';
import Logo from "../components/Logo";
import Bars from"../components/Bars";
import MapContainer from '../components/MapContainer';


const Home = () => {
    return (
     <div className="home">
        <Navigation/>
        <Logo/>
        <Bars/>
        <MapContainer/>
     </div>
    )
}

export default Home;