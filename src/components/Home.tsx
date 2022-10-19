import React from 'react';
import logo from './logo.svg';


function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
        </div>
    );
}

export default Home;
