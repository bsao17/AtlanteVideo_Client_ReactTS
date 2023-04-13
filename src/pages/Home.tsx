import React from "react";
import { Link } from "react-router-dom";
import { TitleCard } from "../components";
import home_presentation_dji from "../assets/images/drone_dji.png";
import pellicule from "../assets/images/pellicule2.png";
import Reason from "../components/reasons/Reason";

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
      <div id="reasonsStyle" className="z-0 w-full z-0 mt-10">
          <Reason reasons={reasons} />
      </div>
      <div className="
      text-center

      text-base
      md:text-lg
      lg:text-justify
      p-4
      md:p-6
      lg:pl-20
      lg:pr-20
      ml-4
      md:ml-10
      lg:ml-20
      mr-4
      md:mr-10
      lg:mr-20
      mt-5
      shadow-6-strongB
      border
      border-gray-500
      rounded-xl
      bg-gradient-to-b from-blue-500 to-blue-900 via-blue-200"
           style={{textShadow: "1px 1px 2px white"}}>
        <h3 className="text-center text-white text-xl md:text-2xl lg:text-2xl mb-5" style={{textShadow: "1px 1px 2px black"}}>Votre partenaire pour des solutions numériques innovantes</h3>
        Découvrez Atlante Création Numérique, 
        votre développeur freelance expert en Python, JavaScript, Web et DevOps, pour des projets sur mesure. 
        Je vous accompagne également dans la réalisation de contenus numériques captivants, 
        tels que des vidéos et du motion design. 
        Faites confiance à Atlante Création Numérique pour transformer vos idées en réalités numériques exceptionnelles.
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
