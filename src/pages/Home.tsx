import React from "react";
import {Link} from "react-router-dom";
import {TitleCard} from "../components";
import home_presentation_anafi from "../assets/drone_anafi.png";
import home_presentation_dji from "../assets/drone_dji.png";
import Reason from "../components/reasons/Reason";

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
            ">
                <div className="cursor-pointer" onClick={()=>{window.location.assign("https://www.youtube.com/channel/UCnaW05fHVPXc6m1e9UaFaSA");}}>
                    <figure className="hover:opacity-50">
                        <figcaption className=" flex flex-col justify-center items-center text-2xl text-white p-3 border border-gray-200 rounded-full w-72 m-auto ">
                            Chaine YouTube
                        </figcaption>
                        <img src={home_presentation_anafi} className=" sm:block md:block mt-9 pt-4  z-10" alt="logo"/>
                    </figure>
                </div>

                <div className="w-full">
                    <Reason/>
                </div>

                <div className="mb-28 flex flex-col justify-center items-center">
                </div>
                <div className="col-span-2 flex justify-center rounded-full">
                    <Link to="">
                        <figure className="hover:opacity-50">
                            <figcaption className="flex flex-col justify-center items-center text-2xl text-white p-3 border border-gray-200 rounded-full w-72 m-auto ">
                                Matériel Disponible
                            </figcaption>
                            <img src={home_presentation_dji} className=" sm:block md:block mt-5 pt-4 hover:opacity-50 z-10" alt="logo" />
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
