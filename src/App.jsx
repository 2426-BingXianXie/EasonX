import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-left">
                <h3>Eason (BingXian) Xie</h3>
                <p>Data Science & Full-Stack Developer</p>
                <p>Northeastern University • Class of 2028</p>
              </div>
              <div className="footer-center">
                <div className="footer-links">
                  <a href="#hero">Home</a>
                  <a href="#about">About</a>
                  <a href="#experience">Experience</a>
                  <a href="#projects">Projects</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-social">
                  <a href="mailto:2153366728xie@gmail.com" aria-label="Email">📧</a>
                  <a href="tel:+18572729958" aria-label="Phone">📱</a>
                  <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
                  <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">💻</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 Eason Xie. All rights reserved. Built with React & passion for technology.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;