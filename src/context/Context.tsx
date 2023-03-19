import React from "react";
import {createContext, useCallback, useState} from "react";
import {useLocation} from "react-router-dom";

export const Context = createContext({
    toggleNavigation: false,
    focusNavigation: true,

    handleNavigationbar: () => {}
});

export const ToggleProvider = ({children}: any) => {
    const[toggleNavigation, setToggleNavigation] = useState(false);
    const [focusNavigation, setFocusNavigation] = useState(true);
    const location = useLocation();
    const handleNavigationbar = useCallback(() => {
        setToggleNavigation(!toggleNavigation);
        setFocusNavigation(!focusNavigation);
    }, [toggleNavigation, focusNavigation]);
    return (
        <Context.Provider value={{toggleNavigation, focusNavigation  , handleNavigationbar}}>
            <div>{children}</div>
        </Context.Provider>
    );
};
