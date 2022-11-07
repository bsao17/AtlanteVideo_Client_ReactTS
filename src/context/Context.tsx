import {createContext, useCallback, useState} from "react";

export const Context = createContext({
    toggleNavigation: false,
    focusNavigation: true,
    handleNavigationbar: () => {}
});

export const ToggleProvider = ({children}: any) => {
    const[toggleNavigation, setToggleNavigation] = useState(false);
    const [focusNavigation, setFocusNavigation] = useState(true);
    const handleNavigationbar = useCallback(() => {
        setToggleNavigation(!toggleNavigation);
        setFocusNavigation(!focusNavigation);
    }, [toggleNavigation, focusNavigation]);
    return (
        <Context.Provider value={{toggleNavigation, focusNavigation , handleNavigationbar}}>
            <div>{children}</div>
        </Context.Provider>
    );
};
