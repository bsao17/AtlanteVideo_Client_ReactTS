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
                <div className="col-span-1 flex justify-center hover:border border-white hover:rounded-full">
                    <img src={home_presentation_anafi} className="pt-16 hover:bg-cyan-900 rounded-full" alt="logo" />
                </div>
                <div className="col-span-2 flex justify-center hover:border border-white rounded-full">
                    <img src={home_presentation_dji} className="hover:bg-cyan-900 rounded-full" alt="logo" />
                </div>
            </div>
        </>

    );
}

export default Home;
