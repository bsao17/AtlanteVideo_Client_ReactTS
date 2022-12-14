import React, { FunctionComponent} from "react";
import {Route, Routes} from "react-router-dom";
import {About, Home, Product, Signin, VideoGrid} from "./pages";
import {Navigation, NavigationResponsive, VerticaleResponsiveMenu, Footer} from "./components";
import useToggleNavLink from "./hook/useToggleNavLink";


const App: FunctionComponent = () => {
    const context = useToggleNavLink();
    return (
        <div className="App bg-neutral-800" style={{ backgroundColor: "#262626"}}>
            <NavigationResponsive handleNavigationBar={context.handleNavigationbar}/>
            <VerticaleResponsiveMenu closed={context.handleNavigationbar} status={context.toggleNavigation}/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/video" element={<VideoGrid/>}/>
                <Route path="/signin" element={<Signin/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
