import React from "react";
import { Link } from "react-router-dom";
import { TitleCard } from "../components";
import home_presentation_dji from "../assets/images/drone_dji.png";
import pellicule from "../assets/images/pellicule2.png";
import Reason from "../components/reasons/Reason";
import Chat from "../components/chat/Chat";

function Home() {
  const reasons = [
    "Motion Design",
    "Animation Web ",
    "Développeur Web",
    "Réalisation de Vidéos",
    "Montage vidéo",
    "Prise de vues aérienne",
    "Post-production",
    "Effets spéciaux",
    "Communication visuelle",
    "Clip artistique",
  ];
 
  return (
    <>
      <TitleCard title="Atlante Création Numérique" />
      <div id="reasonsStyle" className="z-0 w-full z-0 mt-10 hidden md:block">
          <Reason reasons={reasons} />
      </div>


      <div
        className="
            columns-2
            flex
            flex-col
            flex-wrap
            justify-end
            items-center
            pt-9
            md:block
            rounded
            "
      >
        <div className="cursor-pointer z-40">
          <Link to="/video">
            <figure className="hover:opacity-50">
              <figcaption className=" flex flex-col justify-center items-center text-2xl text-white p-3 border border-gray-200 rounded-full w-72 m-auto ">
                Vidéos
              </figcaption>
              <img
                src={home_presentation_dji}
                className=" sm:block md:block mt-9 pt-4  z-10"
                alt="logo"
              />
            </figure>
          </Link>
        </div>

        

        <div className="mb-28 flex flex-col justify-center items-center"></div>
        <div className="col-span-2 flex justify-center rounded-full">
          <Link to="/motion">
            <figure className="hover:opacity-50">
              <figcaption className="flex flex-col justify-center items-center text-2xl text-white p-3 border border-gray-200 rounded-full w-72 m-auto ">
                Marketing, Motion D
              </figcaption>
              <img
                src={pellicule}
                className=" sm:block md:block mt-5 pt-4 hover:opacity-50 z-10 w-72"
                alt="logo"
              />
            </figure>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
