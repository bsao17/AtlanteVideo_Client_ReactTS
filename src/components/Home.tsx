import React from 'react';
import TitleCard from "./TitleCard";
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
            pt-9 md:block
            rounded
            mx-24
            ">
                <div className="col-span-1 mb-28 flex justify-center hover:shadow hover:rounded-full">
                    <img src={home_presentation_anafi} className="hidden md:block sm:block xl:block pt-4 hover:opacity-50  z-10" alt="logo" />
                </div>
                <div className="col-span-2 flex justify-center rounded-full">
                    <img src={home_presentation_dji} className="hidden md:block sm:block xl:block pt-4 hover:opacity-50 z-10" alt="logo" />
                </div>
            </div>
        </>

    );
}

export default Home;
