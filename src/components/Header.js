import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'; // Ícones para o botão hamburguer e tema
import '../styles/Header.css';

function Header() {
    const [theme, setTheme] = useState('light');
    const [menuOpen, setMenuOpen] = useState(false);

    // Detectar o tema do navegador
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    // Atualizar o tema e salvar no localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Função para alternar tema
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Função para alternar o menu no mobile
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>My Portfolio</h1>
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                {/* O botão de tema só aparece dentro do menu hamburguer em telas menores */}
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;
