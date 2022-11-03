import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const dogs = ["Beans", "Shackleton", "Mina", "Midge", "Baby", "Marco"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={dogs} greeting={"hullo"}/>
  </React.StrictMode>
);
