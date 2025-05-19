import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Element name="home">
          <Hero />
        </Element>
        
        <Element name="about">
          <About />
        </Element>
        
        <Element name="experience">
          <Experience />
        </Element>
        
        <Element name="skills">
          <Skills />
        </Element>
        
        <Element name="projects">
          <Projects />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;