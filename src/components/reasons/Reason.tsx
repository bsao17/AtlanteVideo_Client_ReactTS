import React, { useState, useEffect } from "react";
import "./Reason.css"

interface props {
    reasons: string[]
}

const Reason: React.FC<props> = ({reasons}) => {
    const [reasonIndex, setReasonIndex] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setReasonIndex((reasonIndex + 1));
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, [reasonIndex, reasons.length]);

    return (
        <div>
            <div className="container-reason">
                <div>
                    <div id="text" className={"text-enter-active"}>{reasons[reasonIndex]}</div>
                </div>
            </div>
        </div>
    );
};

export default Reason;
