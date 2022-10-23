import React, {useContext} from 'react';
import TitleCard from "./TitleCard";
import home_presentation_anafi from "../assets/drone_anafi.png";
import home_presentation_dji from "../assets/drone_dji.png";
import {Context} from "../context/Context"

function Home() {
    // @ts-ignore
    const myContext = useContext(Context)
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
                <div className="mb-28 flex flex-col justify-center items-center hover:shadow">
                    <img src={home_presentation_anafi} className="hidden md:block sm:block xl:block pt-4 hover:opacity-50  z-10" alt="logo"/>
                    <div className="hover:font-semibold">{myContext.droneName}</div>
                </div>
                <div className="col-span-2 flex justify-center rounded-full">
                    <img src={home_presentation_dji} className="hidden md:block sm:block xl:block pt-4 hover:opacity-50 z-10" alt="logo" />
                </div>
            </div>
        </>

    );
}

export default Home;
