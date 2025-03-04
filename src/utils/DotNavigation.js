// src/components/DotNavigation.js
import React, { useEffect, useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCogs } from 'react-icons/fa'; // Ícones para cada seção
import '../styles/DotNavigation.css';

function DotNavigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false); // Estado para visibilidade do menu
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Verifica se estamos rolando para baixo ou para cima
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(true); // Mostra o menu ao rolar para baixo
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(false); // Esconde o menu ao rolar para cima
            }

            setLastScrollY(currentScrollY);

            // Detecta a seção ativa
            const sections = document.querySelectorAll('section');
            const footer = document.getElementById('footer');
            let currentSection = 'home';

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
                    currentSection = sectionId;
                }
            });

            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                if (footerTop <= window.innerHeight / 2) {
                    currentSection = 'footer';
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`dot-navigation ${isVisible ? 'visible' : 'hidden'}`}>
            <a href="#home" className={`dot ${activeSection === 'home' ? 'active icon' : ''}`} aria-label="Ir para Home" title="Ir para Home">
                {activeSection === 'home' ? <FaHome /> : ''}
            </a>
            <a href="#about" className={`dot ${activeSection === 'about' ? 'active icon' : ''}`} aria-label="Ir para Sobre" title="Ir para Sobre">
                {activeSection === 'about' ? <FaUser /> : ''}
            </a>
            <a href="#projects" className={`dot ${activeSection === 'projects' ? 'active icon' : ''}`} aria-label="Ir para Projetos" title="Ir para Projetos">
                {activeSection === 'projects' ? <FaBriefcase /> : ''}
            </a>
            <a href="#skills" className={`dot ${activeSection === 'skills' ? 'active icon' : ''}`} aria-label="Ir para Skills" title="Ir para Skills">
                {activeSection === 'skills' ? <FaCogs /> : ''}
            </a>
            <a href="#footer" className={`dot ${activeSection === 'footer' ? 'active icon' : ''}`} aria-label="Ir para Contacts" title="Ir para Contacts">
                {activeSection === 'footer' ? <FaEnvelope /> : ''}
            </a>
        </div>
    );
}

export default DotNavigation;
