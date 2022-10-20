import React from 'react';
import logo from './logo.svg';
import TitleCard from "./TitleCard";


function Home() {
    return (
        <div>
            <TitleCard title="Accueil"/>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Home;
