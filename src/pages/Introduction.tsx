import React from "react";
import {IntroAnimation} from "../components/IntroAnimation/IntroAnimation";
import styles from "./style/introduction.module.scss"

const Introduction: React.FC = () => {
    return (
            <div id={styles.animation}>
                <IntroAnimation/>
            </div>
        )
}

export default Introduction;