import React from "react";
import { Link } from "react-router-dom";
import { TitleCard } from "../components";
import home_presentation_dji from "../assets/drone_dji.png";
import pellicule from "../assets/pellicule2.png";
import Reason from "../components/reasons/Reason";
import "../index.css";

function Home() {
  const reasons = [
    "Mariage",
    "Evénement",
    "Entreprise",
    "Vacances",
    "CV",
    "Tutoriel",
    "Produit",
    "Association",
    "Publicité",
    "Clip",
  ];

  return (
    <>
      <TitleCard title="Atlante-Video-Production" />
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
        <div
          className="cursor-pointer">
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

        <div id="reasonsStyle" className=" w-full text-white">
          <Reason reasons={reasons} />
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
