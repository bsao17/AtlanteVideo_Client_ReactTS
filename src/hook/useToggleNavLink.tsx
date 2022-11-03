import {useContext} from "react";
import {Context} from "../context/Context";

export default function useToggleNavLink(){
    return useContext(Context);
}