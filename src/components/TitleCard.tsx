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
            border-b-4
            border-b-gray-500
            bg-neutral-800
            font-serif"
            style={{backgroundColor: "#232324"}}>
                <img className="absolute right-0 rounded-full mx-10" src={boule} alt="logo boule" width={90}/>
                {title}
            </h1>
        </div>
    );
};

export default TitleCard;