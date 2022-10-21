import sea_footer_image from "../../assets/Sea-footer-Image.png";
import styles from "./footer.module.scss";
import {FunctionComponent} from "react";

const Footer: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <img className="w-full h-52 m-0" src={sea_footer_image} alt="sea footer"/>
        </div>
    )
}

export default Footer;