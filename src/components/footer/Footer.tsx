import React, {FunctionComponent} from "react";
import sea_footer_image from "../../assets/images/Sea-footer-Image.png";
import styles from "./footer.module.scss";

const Footer: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <img className="w-full h-52 m-0 bottom-0" src={sea_footer_image} alt="sea footer"/>
            <div className="h-56" style={{backgroundColor: "#001B56"}}>
                <div className="h-16 text-2xl font-serif flex justify-center items-center text-white">ACN</div>
                <div className="columns-3 my-4">
                    <div className="h-full flex justify-center items-center text-white">
                        <ul>
                            <li>foot-col-one</li>
                            <li>foot-col-one</li>
                            <li>foot-col-one</li>
                            <li>foot-col-one</li>
                        </ul>
                    </div>
                    <div className=" flex justify-center items-center text-white">
                        <ul>
                            <li>foot-col-two</li>
                            <li>foot-col-two</li>
                            <li>foot-col-two</li>
                            <li>foot-col-two</li>
                        </ul>
                    </div>
                    <div className=" flex justify-center items-center text-white">
                        <ul>
                            <li>foot-col-three</li>
                            <li>foot-col-three</li>
                            <li>foot-col-three</li>
                            <li>foot-col-three</li>
                        </ul>
                    </div>
                </div>
                <p className="font-light text-xs font-bold text-white text-center text-sm">
                    <span className="text-md-center"> © </span>
                    2022 <strong className="font-light font-serif">ACN. All rights reserved.</strong>
                </p>
            </div>
        </div>
    );
};

export default Footer;