// src/components/Home.js
import React, { useRef, useEffect } from 'react';
import HomeAnimations from '../Animation/Home/HomeAnimations'; // Importa o módulo de animações para a página inicial
import '../styles/Home.css'; // Importa os estilos gerais para a página inicial
import '../styles/SmallScreenAdjustments.css'; // Importa estilos específicos para ajustes em telas pequenas

function Home() {
    // Referências para elementos do DOM
    const titleRef = useRef(null); // Referência para o título principal
    const paragraphRefs = useRef([]); // Array de referências para os parágrafos
    const buttonLeftRef = useRef(null); // Referência para o botão "Veja Meus Projetos"
    const buttonRightRef = useRef(null); // Referência para o botão "Saiba Mais"
    const imageRef = useRef(null); // Referência para a imagem de perfil
    const columnRightRef = useRef(null); // Referência para a coluna direita

    // Executa as animações ao carregar o componente
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
                <p ref={(el) => (paragraphRefs.current[1] = el)}>
                    É um prazer tê-lo aqui! Este espaço foi cuidadosamente preparado para compartilhar minha trajetória e algumas das soluções em que venho trabalhando. Cada projeto carrega um pouco da minha dedicação e busca constante por inovação.
                </p>
                <p ref={(el) => (paragraphRefs.current[2] = el)}>
                    Explore à vontade, conheça as criações e as ideias que me inspiram. Espero que a experiência seja tão interessante para você quanto foi para mim construir cada um desses trabalhos.
                </p>
                {/* Botão para navegar para a seção de projetos */}
                <a ref={buttonLeftRef} href="#projects" className="cta-button-left">Veja Meus Projetos</a>
            </div>

            {/* Coluna Direita */}
            <div ref={columnRightRef} className="column-right">
                <div className="content-wrapper">
                    {/* Imagem de perfil ou ícone representativo */}
                    <img ref={imageRef} src="/perfil/BemVindoIcon.png" alt="Ícone representativo" className="skills-image" />
                    <h2>Tecnologias</h2>
                    {/* Lista de tecnologias dividida em categorias */}
                    <ul>
                        <li><strong>Front-end:</strong> <span>React.js, Next.js, Material-UI, Axios, Styled Components, DOMPurify, Framer Motion, React Toastify, Sass</span></li>
                        <li><strong>Back-end:</strong> <span>PostgreSQL, Node.js, Express.js, @vercel/postgres, CORS, SSL</span></li>
                        <li><strong>Ferramentas:</strong> <span>Git, Vercel, NextAuth, Heroku, PgAdmin, MongoCompass</span></li>
                        <li><strong>Segurança:</strong> <span>NextAuth, 2FA, OAuth, JWT, CSRF, DOMPurify, SSL, LGPD</span></li>
                    </ul>
                </div>
                {/* Botão para navegar para a seção "Sobre" */}
                <a ref={buttonRightRef} href="#about" className="cta-button-right">Saiba Mais</a>
            </div>
        </div>
    );
}

export default Home;
