import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Ícones para o botão de alternância de tema
import '../styles/Header.css';
import '../styles/SmallScreenAdjustments.css';

function Header() {
    const [theme, setTheme] = useState('light');

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

    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                {/* O botão de alternância de tema */}
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
}

export default Header;
