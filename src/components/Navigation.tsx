import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const activeBouton = "text-center px-6 py-2.5 bg-neutral-800 text-white font-medium text-xs leading-tight uppercase hover:bg-gray-700 focus:bg-neutral-800 ";
const inactiveBouton = "text-center px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase";

const Navigation: React.FC = () => {
    const [selected, setSelected] = useState< "home" | "service" | "about" | "contact">();
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/home":
                setSelected("home");
                break;
            case "/product":
                setSelected("service");
                break;
            case "/about":
                setSelected("about");
                break;
            case "/Contact":
                setSelected("contact");
                break;
        }
    }, [location]);

    const handleFocusNavigation = (name: "home" | "service" | "about" | "contact") => {
        setSelected(name);
    };

    return (
        <div className="w-full hidden sm:inline md:inline">
            <ul className="columns-4 flex flex-row justify-between md:justify-start text-blue-200">
                <Link
                    to="/home"
                    className={selected === "home" ? activeBouton : inactiveBouton}
                    onClick={() => {
                        handleFocusNavigation("home");
                    }}
                >
                    Accueil
                </Link>
                <Link
                    to="/product"
                    className={selected === "service" ? activeBouton : inactiveBouton}
                    onClick={() => {
                        handleFocusNavigation("service");
                    }}
                >
                    Nos Prestations
                </Link>
                <Link
                    to="/about"
                    className={selected === "about" ? activeBouton : inactiveBouton}
                    onClick={() => {
                        handleFocusNavigation("about");
                    }}
                >
                    A propos
                </Link>
                <Link
                    to="/Contact"
                    className={selected === "contact" ? activeBouton : inactiveBouton}
                    onClick={() => {
                        handleFocusNavigation("contact");
                    }}
                >
                    Contact
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;

