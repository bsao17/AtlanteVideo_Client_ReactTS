import React from "react";
import optique from "../../assets/optique.jpg"

export const IntroAnimation: React.FC = () => {
    return (
        <div>
            <div>
                <img className="w-3/4 aspect-auto" src={optique} alt="optique photo"
                     style={{display: "block", margin: "auto", width: "100%", height: "100%"}}/>
            </div>
        </div>
    )
}