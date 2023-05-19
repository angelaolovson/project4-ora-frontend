import React from 'react';
import {Routes, Navigate, Route} from 'react-router-dom';
import MainNav from './components/Nav/MainNav';
import './App.css';


function App() {
  let routes;

 

  return (
    <div className="App">

      <header>
        <MainNav />
      </header>
      <main>{Routes}</main>
    </div>
  );
}

export default App;

