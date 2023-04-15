import React from "react";
import boule from "../assets/gif/LogoSite.gif"

const TitleCard = ({title}: {title: string}) => {
    return (
        <div>
            <h1 className="
            w-full
            text-3xl
            flex
            justify-center
            items-center
            text-white
            p-4


            bg-neutral-800
            font-serif"
            style={{backgroundColor: "#232324"}}>
                <img className="absolute hidden sm:block right-0 rounded-full mx-10" src={boule} alt="logo boule" width={90}/>
                <span>
                    {title}
                    <div className=" w-24 rounded ml-3 mt-2" style={{backgroundColor: "#457BB1", height: "2px"}}></div>
                    <div className=" w-24 rounded ml-2 mt-1" style={{backgroundColor: "#095dad", height: "2px"}}></div>
                    <div className=" w-24 rounded ml-1 mt-1" style={{backgroundColor: "#457BB1", height: "2px"}}></div>
                </span>
            </h1>
        </div>
    );
};

export default TitleCard;