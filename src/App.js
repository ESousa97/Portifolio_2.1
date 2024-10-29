// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import DotNavigation from './utils/DotNavigation';
import Skills from './components/Skills';
import './styles/App.css';
import './styles/SmallScreenAdjustments.css';

function App() {
    return (
        <div className="app">
            <Header />
            <DotNavigation /> {/* Adicione o DotNavigation aqui */}
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="skills">
                    <Skills />
                </section>
            </main>
            <Footer id="footer" />
        </div>
    );
}

export default App;
