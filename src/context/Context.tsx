import {createContext, useCallback, useState} from "react";

export const Context = createContext({
    toggleNavigation: false,
    handleNavigationbar: () => {}
});

export const ToggleProvider = ({children}: any) => {
    const[toggleNavigation, setToggleNavigation] = useState(false);
    const handleNavigationbar = useCallback(() => {
        setToggleNavigation(!toggleNavigation);
    }, [toggleNavigation]);
    return (
        <Context.Provider value={{toggleNavigation, handleNavigationbar}}>
            <div>{children}</div>
        </Context.Provider>
    );
};
