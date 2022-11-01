import React, {FunctionComponent} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {About, Home, Product, Signin, VideoGrid} from "./pages";
import {Navigation, Footer} from "./components";
import NavigationResponsive from "./components/NavigationResponsive";


const App: FunctionComponent = () => {
    return (
        <div className="App bg-neutral-800" style={{ backgroundColor: "#262626"}}>
            <Router>
                <NavigationResponsive/>
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
