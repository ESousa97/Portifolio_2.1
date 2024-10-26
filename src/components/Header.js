import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.css';
import '../styles/SmallScreenAdjustments.css';

function Header() {
    const [theme, setTheme] = useState('light');
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade do header
    const [lastScrollPos, setLastScrollPos] = useState(0); // Estado para armazenar a posição anterior do scroll

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

    // Função para detectar a direção do scroll
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // Se o usuário rolar para baixo, esconde o header; se rolar para cima, mostra o header
        if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollPos(currentScrollPos); // Atualiza a última posição de scroll
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPos]);

    return (
        <header className={`header ${isVisible ? '' : 'hidden'}`}>
            <nav className="nav">
                <ul>
                    <li><a href="#home"><FaHome /></a></li>
                    <li><a href="#about"><FaUser /></a></li>
                    <li><a href="#projects"><FaBriefcase /></a></li>
                    <li><a href="#footer"><FaEnvelope /></a></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
}

export default Header;
