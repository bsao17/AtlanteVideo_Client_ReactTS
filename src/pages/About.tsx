import {TitleCard, SetProfile} from "../components";
import {FunctionComponent} from "react";


const About: FunctionComponent = ()=>{
    return(
        <div>
            <TitleCard title={"Historique et projets d'Atlante-Production"}/>
            <div>
                <SetProfile/>
            </div>
        </div>
    )
}

export default About;