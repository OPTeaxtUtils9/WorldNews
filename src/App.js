// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';  // Corrected import statement
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {  // Corrected class inheritance
  render() {
    return (
      <>
        <Router>
          <Navbar />          
            <Routes>
              <Route path="/" element={<News pageSize={6} country="us" category="general" />} />
              <Route path="/business" element={<News pageSize={6} country="us" category="business" />} />
              <Route path="/entertainment" element={<News pageSize={6} country="us" category="entertainment" />} />
              <Route path="/health" element={<News pageSize={6} country="us" category="health" />} />
              <Route path="/science" element={<News pageSize={6} country="us" category="science" />} />
              <Route path="/technology" element={<News pageSize={6} country="us" category="technology" />} />
              <Route path="/about" element={<About />} />
            </Routes>
          
        </Router>
      </>
    );
  }
}
