import React from "react";
import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Locate from './components/Locate.jsx';
import About from './components/About.jsx';
import Awareness from './components/Awareness.jsx';
import Prediction from './components/Prediction.jsx';
import Recycle from './components/Recycle.jsx';
import Donate from './components/Donate.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
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
        <Route exact path = "/prediction" element={<Prediction/>}></Route>
        <Route exact path = "/recycle" element={<Recycle/>}></Route>
        <Route exact path = "/donate" element={<Donate/>}></Route>
        <Route exact path = "/signup" element={<Signup/>}></Route>
        <Route exact path = "/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
