import {createContext} from "react";

const droneParts = {
    title: "Exemple de videos",
    droneType: "Racer",
    price: 1290
}

export const Context = createContext();

const Provider = ({children}) => {
    return (
        <Context.Provider value={droneParts}>
            <div>{children}</div>
        </Context.Provider>
    )
}

export default Provider;