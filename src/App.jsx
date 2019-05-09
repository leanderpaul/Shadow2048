import React, { useState } from 'react';

import Game from './components/Game';
import Header from './components/Header';

import './resources/App.css';

function App() {
    const [key, setKey] = useState(null);
    document.addEventListener('keydown', (event) => {
        setKey(event.keyCode);
    })
    return (
        <div className="App">
            <Header />
            <Game keyPressed={key}/>
        </div>
    );
}

export default App;
