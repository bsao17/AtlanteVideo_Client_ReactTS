import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import optique from "../../assets/optique.jpg";
import { useNavigate } from "react-router-dom";

export const IntroAnimation: React.FC = () => {
    const [isAnimationDone, setAnimationDone] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAnimationDone) {
            setTimeout(() => {
                navigate("/home");
            }, 1000);
        }
    }, [isAnimationDone, navigate]);

    const fadeInAnimation = useSpring({
        opacity: isAnimationDone ? 0 : 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
        onRest: () => setAnimationDone(true),
    });

    const scaleAnimation = useSpring({
        transform: isAnimationDone ? "scale(0.8)" : "scale(1)",
        from: { transform: "scale(1)" },
        config: { duration: 1000 },
    });

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
            <animated.div style={{ ...fadeInAnimation, ...scaleAnimation }}>
                <img
                    className="w-3/4 aspect-auto"
                    src={optique}
                    alt="optique photo"
                    style={{ display: "block", margin: "auto", width: "100%", height: "100%" }}
                />
            </animated.div>
        </div>
    );
};
