import React from 'react';

import Game from './components/Game';
import Header from './components/Header';

import './resources/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Game />
        </div>
    );
}

export default App;
