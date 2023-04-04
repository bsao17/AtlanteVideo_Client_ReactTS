import React from "react";
import {IntroAnimation} from "../components/IntroAnimation/IntroAnimation";
import styles from "./style/introduction.module.scss"
import {Telephone} from "../components/telephone";

const Introduction: React.FC = () => {
    return (
            <div id={styles.animation}>
                <Telephone/>
                <IntroAnimation/>
            </div>
        )
}

export default Introduction;