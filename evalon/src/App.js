// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Cards from './pages/Cards';
import Lore from './pages/Lore';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/cards" className="nav-link">Cards</Link>
            </li>
            <li className="nav-item">
              <Link to="/lore" className="nav-link">Lore</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/lore" element={<Lore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
