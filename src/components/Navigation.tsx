import {Link} from "react-router-dom";
import React, {useState} from "react";

const activeBouton = "text-center px-6 py-2.5 bg-neutral-900 text-white font-medium text-xs leading-tight uppercase hover:bg-gray-700 focus:bg-neutral-900 ";
const inactiveBouton = "text-center px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase";

const Navigation = () => {
    const [home, setHome] = useState(false);
    const [service, setService] = useState(false);
    const [about, setAbout] = useState(false);
    const [signin, setSignin] = useState(false);

    const handleFocusNavigation_home = ()=>{
        setHome(true);
        setService(false);
        setAbout(false);
        setSignin(false);
    };

    const handleFocusNavigation_service = ()=>{
        setHome(false);
        setService(true);
        setAbout(false);
        setSignin(false);
    };

    const handleFocusNavigation_about = ()=>{
        setHome(false);
        setService(false);
        setAbout(true);
        setSignin(false);
    };

    const handleFocusNavigation_signin = ()=>{
        setHome(false);
        setService(false);
        setAbout(false);
        setSignin(true);
    };

    return (
        <div className=" w-full hidden sm:inline md:inline">
            <ul className="columns-4 flex flex-row justify-between md:justify-start text-blue-200">
                <Link to="/" className={ home ? activeBouton : inactiveBouton} onClick={()=>{
                    handleFocusNavigation_home();}
                }>Accueil</Link>
                <Link to="/product" className={service ? activeBouton : inactiveBouton } onClick={()=>{

                    handleFocusNavigation_service();}
                }>Produits et Services</Link>
                <Link to="/about" className={about ? activeBouton : inactiveBouton } onClick={()=>{
                    handleFocusNavigation_about();}
                }>A propos</Link>
                <Link to="/signin" className={signin ? activeBouton : inactiveBouton} onClick={()=>{
                    handleFocusNavigation_signin();}
                }>Signin</Link>
            </ul>
        </div>
    );
};

export default Navigation;