import React from 'react';
import logo from './logo.svg';
import TitleCard from "../__TEST__/titleCard/TitleCard";

function Home() {
    return (
        <div>
            <TitleCard title="Atlante-Video-Production"/>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Home;
