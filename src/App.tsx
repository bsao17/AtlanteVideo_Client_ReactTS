import React, {FunctionComponent} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {About, Home, Product} from "./components";


const App: FunctionComponent = () => {
  return (
    <div className="App">
        <Router>
            <ul className="flex flex-row justify-around">
                <Link to="/home">Accueil</Link>
                <Link to="/about">A propos</Link>
                <Link to="/product">Services & produits</Link>
            </ul>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="product" element={<Product/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
