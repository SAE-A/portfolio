import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <div className="logo">Saeah Kim</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
