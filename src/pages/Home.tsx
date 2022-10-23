import React from 'react';
import {Link} from "react-router-dom";
import {TitleCard} from "../components";
import home_presentation_anafi from "../assets/drone_anafi.png";
import home_presentation_dji from "../assets/drone_dji.png";

function Home() {
    return (
        <>
            <TitleCard title="Atlante-Video-Production"/>
            <div className="
            columns-2
            flex-col
            justify-end
            pt-9
            md:block
            rounded
            mx-24
            ">
                <div className="mb-28 flex flex-col justify-center items-center">
                    <a href="src/pages/Home">
                        <img src={home_presentation_anafi} className="hidden md:block sm:block xl:block pt-4 hover:opacity-50  z-10" alt="logo"/>
                    </a>
                </div>
                <div className="col-span-2 flex justify-center rounded-full">
                    <Link to="www.google.fr">
                        <img src={home_presentation_dji} className="hidden md:block sm:block xl:block pt-4 hover:opacity-50 z-10" alt="logo" />
                    </Link>
                </div>
            </div>
        </>

    );
}

export default Home;
