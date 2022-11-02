import React, { FunctionComponent, useContext} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {About, Home, Product, Signin, VideoGrid} from "./pages";
import {Navigation, NavigationResponsive, VerticaleResponsiveMenu, Footer} from "./components";
import {Context} from "./context/Context";


const App: FunctionComponent = () => {
    const context = useContext(Context);
    return (
        <div className="App bg-neutral-800" style={{ backgroundColor: "#262626"}}>
            <Router>
                <NavigationResponsive handleNavigationBar={context.handleNavigationbar}/>
                <VerticaleResponsiveMenu closed={context.closedMenu} status={context.toggleNavigation}/>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/video" element={<VideoGrid/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
};

export default App;
