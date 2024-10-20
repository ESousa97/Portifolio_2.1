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
                    Sou José Enoque, Analista de Automação de Processos e Desenvolvedor Web Full Stack com 
                    experiência em diversas tecnologias, como React.js, Next.js, Node.js, TypeScript e PostgreSQL.
                    Atualmente, atuo na automação de processos e desenvolvimento de soluções web, aplicando 
                    práticas inovadoras para otimizar sistemas e melhorar a eficiência de empresas.
                </p>
                <p>
                    Ao longo da minha trajetória, desenvolvi projetos robustos como o EsDataBase, 
                    utilizando stacks modernas e garantindo escalabilidade e alta performance. Além disso, 
                    prezo pela proatividade, flexibilidade e uma abordagem focada na resolução de problemas.
                </p>
                <a href="#projects" className="cta-button">Veja Meus Projetos</a>
            </div>

            {/* Coluna Direita - Habilidades e Tecnologias */}
            <div className="column-right">
                <h2>Habilidades e Tecnologias</h2>
                <ul>
                    <li><strong>Front-end:</strong> React.js, Next.js, Material-UI</li>
                    <li><strong>Back-end:</strong> Node.js, Express, PostgreSQL</li>
                    <li><strong>Ferramentas:</strong> Git, Vercel, NextAuth</li>
                    <li><strong>Segurança:</strong> Autenticação com NextAuth, 2FA</li>
                    <li><strong>Design Responsivo:</strong> UX/UI com Material-UI e CSS3</li>
                    <li><strong>Soft Skills:</strong> Proatividade, Resiliência, Empatia</li>
                </ul>
                <a href="#about" className="cta-button">Saiba Mais</a>
            </div>
        </div>
    );
}

export default Home;
