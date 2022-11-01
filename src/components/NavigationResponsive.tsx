import {Link} from "react-router-dom";

const NavigationResponsive = () => {
    return (
        <div>
            <select name="navigation" id="navigation">
                <Link to="/" ><option value="accueil">Accueil</option></Link>
                <Link to="/product" ><option value="product">Services et Produits</option></Link>
                <Link to="/about" ><option value="about">A propos</option></Link>
                <Link to="/signin" ><option value="signin">Login</option></Link>
            </select>
        </div>
    );
};

export default NavigationResponsive;