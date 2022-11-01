import {Link} from "react-router-dom";
import {MouseEventHandler} from "react";

const visible: string = "visible sm:hidden md:hidden flex flex-col p-5 absolute l-0 top-16 bg-black text-white border border-3 border-gray-200 z-20";
const invisible: string = "invisible sm:hidden md:hidden flex flex-col p-5 absolute l-0 top-16 bg-black text-white border border-3 border-gray-200 z-20";

function VerticaleResponsivveMenu({closed, status}: {closed: MouseEventHandler, status: boolean}){
    return (
        <div className={status ? visible : invisible}>
            <Link className="my-2 hover:bg-gray-200 w-full" onClick={closed} to="/">Accueil</Link>
            <Link className="my-2 hover:bg-gray-700 w-full" onClick={closed} to="/product">Services et Produits</Link>
            <Link className="my-2 hover:bg-gray-700 w-full" onClick={closed} to="/about">A propos</Link>
            <Link className="my-2 hover:bg-gray-700 w-full" onClick={closed} to="/signin">Connexion</Link>
        </div>
    );
}

export default VerticaleResponsivveMenu;