import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './styles/App.css';
import './styles/SmallScreenAdjustments.css';

function App() {
    return (
        <div className="app">
            <Header />
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
            </main>
            <Footer />
        </div>
    );
}

export default App;
