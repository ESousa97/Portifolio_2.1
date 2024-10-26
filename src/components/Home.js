// src/components/Home.js
import React, { useRef, useEffect } from 'react';
import HomeAnimations from '../Animation/Home/HomeAnimations';
import '../styles/Home.css';
import '../styles/SmallScreenAdjustments.css';

function Home() {
    const titleRef = useRef(null);
    const paragraphRefs = useRef([]);
    const buttonLeftRef = useRef(null);
    const buttonRightRef = useRef(null);
    const imageRef = useRef(null);
    const columnRightRef = useRef(null);

    // Chama as animações ao carregar o componente
    useEffect(() => {
        HomeAnimations({
            titleRef,
            paragraphRefs,
            buttonLeftRef,
            buttonRightRef,
            imageRef,
            columnRightRef,
        });
    }, []);

    return (
        <div className="home">
            <div className="column-left">
                <h1 ref={titleRef}>Bem-vindo ao meu Portfólio</h1>
                <p ref={(el) => (paragraphRefs.current[0] = el)}>
                    É um prazer tê-lo aqui! Este espaço foi cuidadosamente preparado para compartilhar minha trajetória e algumas das soluções em que venho trabalhando. Cada projeto carrega um pouco da minha dedicação e busca constante por inovação.
                </p>
                <p ref={(el) => (paragraphRefs.current[1] = el)}>
                    Explore à vontade, conheça as criações e as ideias que me inspiram. Espero que a experiência seja tão interessante para você quanto foi para mim construir cada um desses trabalhos.
                </p>
                <a ref={buttonLeftRef} href="#projects" className="cta-button-left">Veja Meus Projetos</a>
            </div>

            <div ref={columnRightRef} className="column-right">
                <div className="content-wrapper">
                    <img ref={imageRef} src="/perfil/BemVindoIcon.png" alt="Ícone representativo" className="skills-image" />
                    <h2>Tecnologias</h2>
                    <ul>
                        <li><strong>Front-end:</strong> React.js, Next.js, Material-UI, Axios, Styled Components, DOMPurify, Framer Motion, React Toastify, Sass</li>
                        <li><strong>Back-end:</strong> PostgreSQL, Node.js, Express.js, @vercel/postgres, CORS, SSL</li>
                        <li><strong>Ferramentas:</strong> Git, Vercel, NextAuth, Heroku, PgAdmin, MongoCompass</li>
                        <li><strong>Segurança:</strong> NextAuth, 2FA, OAuth, JWT, CSRF, DOMPurify, SSL, LGPD</li>
                    </ul>
                </div>
                <a ref={buttonRightRef} href="#about" className="cta-button-right">Saiba Mais</a>
            </div>
        </div>
    );
}

export default Home;
