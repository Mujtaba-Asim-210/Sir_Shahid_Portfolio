import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Shahid Ahmed. All rights reserved.</p>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  );
}
