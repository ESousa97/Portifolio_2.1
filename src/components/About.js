import React from 'react';
import '../styles/About.css';
import '../styles/SmallScreenAdjustments.css';

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <h1>Sobre Mim</h1>
                <div className="about-columns">
                    {/* Primeira coluna: texto */}
                    <div className="about-text">
                        <p>
                            Meu nome é <strong>José Enoque</strong> e minha história com tecnologia começou de forma simples, 
                            quando trabalhei como estoquista e ajudante de carga e descarga em um supermercado. Esse começo 
                            humilde me ensinou o valor do esforço e da resiliência, e essas lições me acompanharam até hoje.
                        </p>

                        <p>
                            Decidi mudar minha trajetória e entrei no mundo da tecnologia, começando como estagiário de 
                            Service Desk na <strong>Tecnocomp Tecnologia e Serviços</strong>. Em menos de um ano, fui promovido 
                            a Técnico de Suporte N2, uma mudança significativa que me abriu portas para novos desafios. 
                            Durante esse período, aprendi a resolver problemas complexos de maneira rápida e eficaz, sempre com 
                            foco em entregar soluções que realmente agregassem valor ao cliente.
                        </p>

                        <p>
                            Hoje, atuo como <strong>Analista de Automação de Processos</strong> na <strong>Positivo Tecnologia</strong>. 
                            Aqui, lidero iniciativas de automação e desenvolvimento, sempre buscando otimizar processos internos 
                            e melhorar a eficiência da operação. Cada novo projeto é uma oportunidade para criar algo que não só 
                            funcione bem, mas que transforme a maneira como as equipes trabalham e se comunicam.
                        </p>

                        <p>
                            Um dos marcos mais importantes da minha carreira foi o desenvolvimento do <strong>EsDataBase</strong>. 
                            Este projeto me desafiou a criar uma aplicação robusta e escalável que impactou diretamente o dia a dia 
                            das operações. Ainda que tenha sido descontinuado, as lições que aprendi durante o processo continuam a 
                            moldar minha abordagem como desenvolvedor.
                        </p>

                        <p>
                            Sou movido pela paixão em transformar ideias em soluções práticas. Cada desafio é uma chance de inovar, 
                            e minha trajetória me ensinou que com dedicação e foco, é possível superar qualquer obstáculo. 
                            Independente da dificuldade, sempre busco novas formas de agregar valor e fazer a diferença.
                        </p>
                    </div>

                    {/* Segunda coluna: imagem ou outro conteúdo */}
                    <div className="about-extra">
                        <img src="/perfil/perfil.png" alt="José Enoque" className="about-image" />
                        {/* Ou substitua a imagem por uma lista de conquistas, se preferir */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
