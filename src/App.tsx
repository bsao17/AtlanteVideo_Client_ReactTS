import React, {FunctionComponent, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {About, Home, Product, Signin, VideoGrid} from "./pages";
import {Navigation, NavigationResponsive, VerticaleResponsiveMenu, Footer} from "./components";
import useToggleNavLink from "./hook/useToggleNavLink";
import Introduction from "./pages/Introduction";
import MotionDesign from './pages/MotionDesign';


const App: FunctionComponent = () => {
    const context = useToggleNavLink();
    const [select, setSelect] = useState("")

    function newSelect(value: string){
        return setSelect(value)
    }

    return (
        <div className="App bg-neutral-700">
            <NavigationResponsive handleNavigationBar={context.handleNavigationbar}/>
            <VerticaleResponsiveMenu closed={context.handleNavigationbar} status={context.toggleNavigation}/>
            <Navigation />
            <Routes>
                <Route path="/" element={<Introduction/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/video" element={<VideoGrid/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/motion" element={<MotionDesign/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
