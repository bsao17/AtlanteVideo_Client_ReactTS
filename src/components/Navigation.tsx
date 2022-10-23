import {Link} from "react-router-dom";
import React from "react";

const Navigation = () => {
    return (
        <div className=" w-full">
            <ul className="columns-4 flex flex-row justify-between md:justify-start text-blue-200">
                <Link to="/" className="
                text-center
                px-6
                py-2.5
                bg-neutral-800
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-gray-700
                focus:bg-neutral-900
                focus:outline-none
                focus:ring-0
                active:bg-gray-800
                transition
                duration-150
                ease-in-out
                ">Accueil
                </Link>
                <Link to="/product" className="
                text-center
                px-6
                py-2.5
                bg-neutral-800
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-gray-700
                focus:bg-neutral-900
                focus:outline-none
                focus:ring-0
                active:bg-cyan-800
                transition
                duration-150
                ease-in-out
                ">Services & produits
                </Link>
                <Link to="/about" className="
                text-center
                px-6
                py-2.5
                bg-neutral-800
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-gray-700
                focus:bg-neutral-900
                focus:outline-none
                focus:ring-0
                active:bg-cyan-800
                transition
                duration-150
                ease-in-out
                ">A propos
                </Link>
                <Link to="/signin" className="
                text-center
                px-6
                py-2.5
                bg-neutral-800
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-gray-700
                focus:bg-neutral-900
                focus:outline-none
                focus:ring-0
                active:bg-cyan-800
                transition
                duration-150
                ease-in-out
                ">Signin
                </Link>
            </ul>
        </div>
    )
}

export default Navigation;