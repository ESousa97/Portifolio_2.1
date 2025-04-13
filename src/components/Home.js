// src/components/Home.js
import React, { useRef, useEffect } from 'react';
import HomeAnimations from '../Animation/Home/HomeAnimations';
import '../styles/Home.css';
import Button from './Button';

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

  // Dados dos botões para renderização dinâmica
  const buttons = [
    {
      ref: buttonLeftRef,
      href: '#projects',
      label: 'Veja Meus Projetos',
      variant: 'cta-button-left',
    },
    {
      ref: buttonRightRef,
      href: '#about',
      label: 'Saiba Mais',
      variant: 'cta-button-right',
    },
  ];

  return (
    <div className="home">
      {/* Coluna Esquerda */}
      <div className="column-left">
        <h1 ref={titleRef}>Bem-vindo ao meu Portfólio</h1>
        <p ref={(el) => (paragraphRefs.current[0] = el)}>
          É um prazer tê-lo aqui! Este espaço foi cuidadosamente preparado para
          compartilhar minha trajetória e algumas das soluções em que venho trabalhando.
        </p>
        <p ref={(el) => (paragraphRefs.current[1] = el)}>
          Explore à vontade, conheça as criações e as ideias que me inspiram.
        </p>
        {/* Container unificado para os botões */}
        <div className="button-container">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              ref={btn.ref}
              href={btn.href}
              label={btn.label}
              variant={btn.variant}
            />
          ))}
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
            <strong>Front-end:</strong>{' '}
            <span>
              React.js, Next.js, TypeScript, Material UI, TailwindCSS, Framer Motion, Axios, 
              Styled Components, React Icons, DOMPurify, React Toastify, Sass
            </span>
          </li>
          <li>
            <strong>Back-end:</strong>{' '}
            <span>
              Node.js, Express.js, Sequelize, Mongoose, PostgreSQL, MongoDB, SQLite, 
              @vercel/postgres, RESTful APIs, CORS, Helmet, HTTPS, JWT, OAuth
            </span>
          </li>
          <li>
            <strong>Automação & Scripts:</strong>{' '}
            <span>
              Python, PowerShell, Shell Script, Batch, Prompt Windows, Automação de Terminais, 
              Engenharia de Prompts (LLM), Automação de Processos RPA
            </span>
          </li>
          <li>
            <strong>Infraestrutura & DevOps:</strong>{' '}
            <span>
              Docker, AWS (ECS, RDS, ALB, Certificate Manager), GitHub Actions, Vercel, 
              Render, Heroku, PgAdmin, Mongo Compass, Git CLI
            </span>
          </li>
          <li>
            <strong>Segurança:</strong>{' '}
            <span>
              NextAuth, JWT, OAuth 2.0, 2FA, CSRF, Helmet, DOMPurify, SSL/TLS, LGPD
            </span>
          </li>
          <li>
            <strong>Banco de Dados:</strong>{' '}
            <span>
              PostgreSQL, MongoDB, SQLite, MySQL, Sequelize, Mongoose, SQL Server
            </span>
          </li>
          <li>
          <strong>IA & NLP:</strong>{' '}
          <span>
              OpenAI (GPT-4), Google Gemini, Prompt Engineering, NLP com spaCy, Vetorização semântica, 
              Automação Cognitiva com IA, Processamento de Texto, PyQt5, ctypes, winreg, WMI, PyWin32, PyAutoGUI, PyGetWindow e PyInstaller.
            </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
