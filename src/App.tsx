import React, {FunctionComponent, useCallback, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {About, Home, Product, Signin, VideoGrid} from "./pages";
import {Navigation, NavigationResponsive, VerticaleResponsiveMenu, Footer} from "./components";


const App: FunctionComponent = () => {
    const[toggleNavigation, setToggleNavigation] = useState(false);

    const handleNavigationbar = useCallback(() => {
        setToggleNavigation(!toggleNavigation);
    }, [toggleNavigation]);

    function closedMenu(){
        setToggleNavigation(false);
    }
    return (
        <div className="App bg-neutral-800" style={{ backgroundColor: "#262626"}}>
            <Router>
                <NavigationResponsive handleNavigationBar={handleNavigationbar}/>
                <VerticaleResponsiveMenu closed={closedMenu} status={toggleNavigation}/>
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
