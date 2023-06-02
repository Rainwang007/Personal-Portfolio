import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app content">
        <Header />
        <Routes>
          <Route path="/" element={<About name="Rain Wang Jiantao" jobTitle="Full Stack Web Developer" specialization="Javascript, React, Redux, Node.js" location="Singapore" yearsOfExperience="7" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
