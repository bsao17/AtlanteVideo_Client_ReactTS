import {createContext, PropsWithChildren} from "react";

type props = {
    children: PropsWithChildren
}

interface appWithContext {
    state: string
}

let Context: React.Context<appWithContext | null>;
// @ts-ignore
Context = createContext();

const Provider = ({children}: props) => {
    return (
        <Context.Provider value={{state: "hello"}}>
            {/*@ts-ignore*/}
            {children}
        </Context.Provider>
    )
}

export default Provider;