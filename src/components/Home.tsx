import React from 'react';
import TitleCard from "../__TEST__/titleCard/TitleCard";
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
            items-center
            mt-14
            pt-9
            rounded
            mx-24
            invisible
            sm:visible
            lg:visible
            ">
                <div className="col-span-1 flex justify-center">
                    <img src={home_presentation_anafi} className="" alt="logo" />
                </div>
                <div className="col-span-2 flex justify-center">
                    <img src={home_presentation_dji} className="" alt="logo" />
                </div>
            </div>
        </>

    );
}

export default Home;
