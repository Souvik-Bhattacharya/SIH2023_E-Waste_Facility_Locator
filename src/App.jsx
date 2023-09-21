import React from "react";
import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Locate from './components/Locate.jsx';
import About from './components/About.jsx';
import Awareness from './components/Awareness.jsx';
import Footer from './components/Footer.jsx';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route exact path = "/locate" element={<Locate/>}></Route>
        <Route exact path = "/about" element={<About/>}></Route>
        <Route exact path = "/edu" element={<Awareness/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
