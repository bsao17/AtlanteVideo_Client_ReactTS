import React from "react";
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
            flex
            flex-col
            flex-wrap
            justify-end
            items-center
            pt-9
            md:block
            rounded
            mx-24
            ">
                <Link to="/video">
                    <figure className="hover:opacity-50">
                        <figcaption className="flex flex-col justify-center items-center text-2xl text-white p-3 border border-gray-200 rounded-full w-72 m-auto ">
                            Démos Videos
                        </figcaption>
                        <img src={home_presentation_anafi} className="hidden sm:block md:block mt-9 pt-4  z-10" alt="logo"/>
                    </figure>
                </Link>

                <div className="mb-28 flex flex-col justify-center items-center">
                </div>
                <div className="col-span-2 flex justify-center rounded-full">
                    <Link to="">
                        <figure className="hover:opacity-50">
                            <figcaption className="flex flex-col justify-center items-center text-2xl text-white p-3 border border-gray-200 rounded-full w-72 m-auto ">
                                example video
                            </figcaption>
                            <img src={home_presentation_dji} className="hidden sm:block md:block mt-5 pt-4 hover:opacity-50 z-10" alt="logo" />
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
