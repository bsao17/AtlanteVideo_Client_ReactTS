import React, {FunctionComponent} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {About, Home, Product} from "./components";


const App: FunctionComponent = () => {
  return (
    <div className="App bg-neutral-800">
        <Router>
            <ul className="flex flex-row justify-around p-5 text-blue-200">
                <Link to="/" className="font-serif font-semibold text-xl focus:text-white focus:underline">Accueil</Link>
                <Link to="/product" className="text-xl font-serif font-semibold text-xl focus:text-white focus:underline">Services & produits</Link>
                <Link to="/about" className="text-xl font-serif font-semibold text-xl focus:text-white focus:underline">A propos</Link>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="product" element={<Product/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
