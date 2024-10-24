import React from 'react';
import '../styles/Home.css';
import '../styles/SmallScreenAdjustments.css';

function Home() {
    return (
        <div className="home">
            {/* Coluna Esquerda - Introdução e Perfil Profissional */}
            <div className="column-left">
                <h1>Bem-vindo ao meu Portfólio</h1>
                <p>
                É um prazer tê-lo aqui! Este espaço foi cuidadosamente preparado para compartilhar minha trajetória e algumas das soluções em que venho trabalhando. Cada projeto carrega um pouco da minha dedicação e busca constante por inovação.
                </p>
                <p>
                Explore à vontade, conheça as criações e as ideias que me inspiram. Espero que a experiência seja tão interessante para você quanto foi para mim construir cada um desses trabalhos.
                </p>
                <a href="#projects" className="cta-button-left">Veja Meus Projetos</a>
            </div>

            <div className="column-right">
            <div className="content-wrapper">
            {/* Imagem adicionada aqui */}
            <img src="/perfil/BemVindoIcon.png" alt="Ícone representativo" className="skills-image" />
             <h2>Tecnologias</h2>
  
             <ul>
                <li><strong>Front-end:</strong></li> <li>React.js, Next.js, Material-UI, Axios, Styled Components, DOMPurify, Framer Motion, React Toastify, Sass</li>
                <li><strong>Back-end:</strong></li><li> PostgreSQL, Node.js, Express.js, @vercel/postgres, CORS, SSL</li>
                <li><strong>Ferramentas:</strong></li><li> Git, Vercel, NextAuth, Heroku, PgAdmin, MongoCompass</li>
                <li><strong>Segurança:</strong></li><li> NextAuth, 2FA, OAuth, JWT, CSRF, DOMPurify, SSL, LGPD</li>
            </ul>
            </div>
            <a href="#about" className="cta-button-right">Saiba Mais</a>
        </div>
        </div>
    );
}

export default Home;
