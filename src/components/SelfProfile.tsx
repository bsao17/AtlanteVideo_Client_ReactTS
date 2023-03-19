import React from "react";
import profile from "../assets/images/profile.png";

const SelfProfile = () => {
    return (
        <div className="flex flex-col border border-l-black w-fit my-10 mx-10 relative h-16 rounded-full" >
            <div className="flex flex-col justify-center items-center m-auto bg-indigo-900 rounded-full">
                <div className="flex flex-row justify-center items-center text-justify text-xs ">
                    <img className="object-left w-16 h-16 rounded-full" src={profile} alt="profile"/>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-white  mx-4">
                            Bruno M.
                        </span>
                        <span className="text-sm font-mono text-yellow-100 mx-4">
                            Vidéaste-producteur-développeur
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SelfProfile;