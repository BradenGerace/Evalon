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
              <Link to="/evalon/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/evalon/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/evalon/cards" className="nav-link">Cards</Link>
            </li>
            <li className="nav-item">
              <Link to="/evalon/lore" className="nav-link">Lore</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/evalon/home" element={<Home />} />
          <Route path="/evalon/about" element={<About />} />
          <Route path="/evalon/cards" element={<Cards />} />
          <Route path="/evalon/lore" element={<Lore />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2023 Evalon. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
