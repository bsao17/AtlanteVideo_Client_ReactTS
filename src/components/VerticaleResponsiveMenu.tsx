import React from "react";
import {Link} from "react-router-dom";
import {MouseEventHandler} from "react";
import useToggleNavLink from "../hook/useToggleNavLink";

const visible = "visible rounded-lg sm:hidden md:hidden flex flex-col p-5 absolute l-0 top-16 bg-black text-white shadow-2xl-white border border-gray-200 z-20";
const invisible = "invisible sm:hidden md:hidden flex flex-col p-5 absolute l-0 top-16 bg-black text-white border border-3 border-gray-200 z-20";

function VerticaleResponsiveMenu({status}: {closed: MouseEventHandler, status: boolean}){
    const context = useToggleNavLink();
    return (
        <div className={status ? visible : invisible}>
            <Link className="my-2 hover:bg-gray-700 w-full mx-0" onClick={context.handleNavigationbar} to="/home">Accueil</Link>
            <Link className="my-2 hover:bg-gray-700 w-full" onClick={context.handleNavigationbar} to="/product">Services et Produits</Link>
            <Link className="my-2 hover:bg-gray-700 w-full" onClick={context.handleNavigationbar} to="/about">A propos</Link>
            <Link className="my-2 hover:bg-gray-700 w-full" onClick={context.handleNavigationbar} to="/signin">Connexion</Link>
        </div>
    );
}

export default VerticaleResponsiveMenu;