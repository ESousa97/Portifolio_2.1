import React, { useState, useEffect, useCallback } from 'react';
import { FaSun, FaMoon, FaHome, FaUser, FaBriefcase, FaEnvelope, FaCogs } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
    const [theme, setTheme] = useState('light');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollPos(currentScrollPos);
    }, [lastScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <header className={`header ${isVisible ? '' : 'hidden'}`}>
            <nav className="nav">
                <ul>
                    <li><a href="#home"><FaHome /></a></li>
                    <li><a href="#about"><FaUser /></a></li>
                    <li><a href="#projects"><FaBriefcase /></a></li>
                    <li><a href="#skills"><FaCogs /></a></li>
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
