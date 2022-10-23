import React, {FunctionComponent} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {About, Home, Product} from "./pages"
import {Navigation, Footer} from "./components";


const App: FunctionComponent = () => {
  return (
    <div className="App bg-neutral-800" style={{height: "100vh"}}>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="product" element={<Product/>}/>
            </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
