import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// metodo render que lo inserta en el div con el id  root
let bandera = false;
if (bandera) {
    console.log("hola mundo")
} else {
    root.render([<App />]);
}
