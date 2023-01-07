import React, { useRef, useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./Reason.module.scss";

interface props {
    reasons: string[]
}

const Reason: React.FC<props> = ({reasons}) => {
    const [reasonIndex, setReasonIndex] = useState(0);
    const nodeRef = useRef(null)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setReasonIndex((reasonIndex + 1) % reasons.length);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [reasonIndex, reasons.length]);

    return (
        <TransitionGroup>
            <CSSTransition
                nodeRef={nodeRef}
                timeout={1000}
                classNames={{
                    enter: styles.textEnter,
                    enterActive: styles.textEnterActive,
                }}
            >
                <div>
                    <div className={styles.container}>{reasons[reasonIndex]}</div>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Reason;
