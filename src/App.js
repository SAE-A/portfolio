import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
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
            <li><HashLink smooth to="/#about">About</HashLink></li>
            <li><HashLink smooth to="/#skills">Skills</HashLink></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
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
