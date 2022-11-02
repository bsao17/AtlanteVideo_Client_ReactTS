import {createContext, useCallback, useState} from "react";

export const Context = createContext({
    closedMenu: ()=>{},
    toggleNavigation: false,
    handleNavigationbar: () => {}
});

const ToggleProvider = ({children}: any) => {
    const closedMenu = ()=>{ return setToggleNavigation(!toggleNavigation);};
    const[toggleNavigation, setToggleNavigation] = useState(false);
    const handleNavigationbar = useCallback(() => {
        setToggleNavigation(!toggleNavigation);
    }, [toggleNavigation]);
    return (
        <Context.Provider value={{closedMenu, toggleNavigation, handleNavigationbar}}>
            <div>{children}</div>
        </Context.Provider>
    );
};

export default ToggleProvider;