import {createContext, PropsWithChildren} from "react";

export type dronePartsType = {
    toggle: boolean,
    handleToggle?: Function,
    activeButton: string,
    inactiveButton: string
}

export const droneParts: dronePartsType = {
    toggle: true,
    activeButton: "text-center px-6 py-2.5 bg-neutral-900 text-white font-medium text-xs leading-tight uppercase hover:bg-gray-700 focus:bg-neutral-900 ",
    inactiveButton: "text-center px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase"

};

export const Context = createContext({});

const Provider = ({children}: {children: PropsWithChildren}) => {
    return (
        <Context.Provider value={droneParts}>
            {/*@ts-ignore*/}
            <div>{children}</div>
        </Context.Provider>
    );
};

export default Provider;