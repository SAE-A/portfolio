import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
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
            <li><Link smooth to="/#home">Home</Link></li>
            <li><Link smooth to="/#about">About</Link></li>
            <li><Link smooth to="/#skills">Skills</Link></li>
            <li><Link smooth to="/projects">Projects</Link></li>
            <li><Link smooth to="/#contact">Contact</Link></li>
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
