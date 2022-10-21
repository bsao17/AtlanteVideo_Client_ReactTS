import React from 'react';
import TitleCard from "../__TEST__/titleCard/TitleCard";
import home_presentation_image from "../assets/drone_anafi.png";

function Home() {
    return (
        <div>
            <TitleCard title="Atlante-Video-Production"/>
            <img src={home_presentation_image} className="App-logo" alt="logo" />
        </div>
    );
}

export default Home;
