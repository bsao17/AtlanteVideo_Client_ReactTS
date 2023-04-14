import React, {FunctionComponent} from "react";
import {Route, Routes} from "react-router-dom";
import {About, Home, Product, VideoGrid} from "./pages";
import {Navigation, NavigationResponsive, VerticaleResponsiveMenu, Footer} from "./components";
import useToggleNavLink from "./hook/useToggleNavLink";
import Introduction from "./pages/Introduction";
import MotionDesign from './pages/MotionDesign';
import Contact from "./pages/Contact";
import screen_working_background from "./assets/images/screenWorking.jpg";


const App: FunctionComponent = () => {
    const context = useToggleNavLink();

    return (
        <div className="App" style={{backgroundColor: "#0E0C0D"}}>
            <div className="
      w-full
      text-center
      text-base
      md:text-lg
      lg:text-justify
      p-4
      md:p-6
      lg:pl-5
      lg:pr-5
      text-white
      opacity-90
      "
                 style={{ backgroundImage: `url(${screen_working_background})`}}>
                <h3 className="text-center text-white text-xl md:text-2xl lg:text-2xl mb-5">
                    A.C.N, pour des solutions numériques innovantes</h3>
            </div>
            <NavigationResponsive handleNavigationBar={context.handleNavigationbar}/>
            <VerticaleResponsiveMenu closed={context.handleNavigationbar} status={context.toggleNavigation}/>
            <Navigation />
            <Routes>
                <Route path="/" element={<Introduction/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/video" element={<VideoGrid/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/motion" element={<MotionDesign/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
