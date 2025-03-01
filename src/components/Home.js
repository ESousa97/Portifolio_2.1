// src/components/Home.js
import React, { useRef, useEffect } from 'react';
import HomeAnimations from '../Animation/Home/HomeAnimations';
import '../styles/Home.css';

function Home() {
  const titleRef = useRef(null);
  const paragraphRefs = useRef([]);
  const buttonLeftRef = useRef(null);
  const buttonRightRef = useRef(null);
  const imageRef = useRef(null);
  const columnRightRef = useRef(null);

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
      {/* Coluna Esquerda */}
      <div className="column-left">
        <h1 ref={titleRef}>Bem-vindo ao meu Portfólio</h1>
        <p ref={(el) => (paragraphRefs.current[0] = el)}>
          É um prazer tê-lo aqui! Este espaço foi cuidadosamente preparado para compartilhar minha trajetória e algumas das soluções em que venho trabalhando.
        </p>
        <p ref={(el) => (paragraphRefs.current[1] = el)}>
          Explore à vontade, conheça as criações e as ideias que me inspiram.
        </p>
        {/* Container unificado para os botões */}
        <div className="button-container">
          <a ref={buttonLeftRef} href="#projects" className="cta-button-left">
            Veja Meus Projetos
          </a>
          <a ref={buttonRightRef} href="#about" className="cta-button-right">
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Coluna Direita */}
      <div ref={columnRightRef} className="column-right">
        <div className="content-wrapper">
          <img
            ref={imageRef}
            src="/perfil/BemVindoIcon.png"
            alt="Ícone representativo"
            className="skills-image"
          />
          <h2>Tecnologias</h2>
          <ul>
            <li>
              <strong>Front-end:</strong> <span>React.js, Next.js, Material-UI, Axios, Styled Components, DOMPurify, Framer Motion, React Toastify, Sass</span>
            </li>
            <li>
              <strong>Back-end:</strong> <span>PostgreSQL, Node.js, Express.js, @vercel/postgres, CORS, SSL</span>
            </li>
            <li>
              <strong>Ferramentas:</strong> <span>Git, Vercel, NextAuth, Heroku, PgAdmin, MongoCompass</span>
            </li>
            <li>
              <strong>Segurança:</strong> <span>NextAuth, 2FA, OAuth, JWT, CSRF, DOMPurify, SSL, LGPD</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
