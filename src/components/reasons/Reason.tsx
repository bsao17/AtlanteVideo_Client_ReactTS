import React, { useRef, useState} from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from "./Reason.module.css";

const Reason: React.FC = () => {
    const [reasonIndex, setReasonIndex] = useState(0);
    const nodeRef = useRef(null)
    const reasons = ["Mariage", "Evénement", "Entreprise", "Vacances", "CV", "Tutoriel", "Produit", "Association", "Publicité", "Clip"]

    return (
        <SwitchTransition  mode='out-in'>
            <CSSTransition
                nodeRef={nodeRef}
                timeout={4000}
                classNames={styles.container}
                onEntered={()=>{
                    setInterval(()=>{
                        setReasonIndex(reasonIndex + 1)
                    }, 4000)
                }}
            >
                <div>
                    <div className={styles.text}>{reasons[reasonIndex]}</div>
                </div>
            </CSSTransition>
        </SwitchTransition>

    );
};

export default Reason;
