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
                        Eu sou <strong>José</strong> <strong>Enoque</strong>, e minha jornada com a tecnologia começou de forma inesperada. Antes de descobrir meu caminho na área, trabalhei como, ajudante de pedreiro, estoquista e ajudante de carga e descarga em um supermercado. Foi ali, em meio ao esforço físico e à rotina intensa, que aprendi a importância da resiliência e da dedicação. Essas lições simples, porém profundas, me moldaram e continuam a guiar minha trajetória até hoje.
                        </p>
                        <br></br>
                        <p>
                        Decidi seguir um novo rumo e mergulhei no universo da tecnologia. Comecei como <strong>estagiário</strong> de <strong>Service</strong> <strong>Desk</strong> na <strong>Tecnocomp</strong> <strong>Tecnologia</strong> <strong>e</strong> <strong>Serviços</strong>, onde minha curiosidade e vontade de aprender rapidamente me levaram a uma <strong>promoção</strong> para <strong>Técnico</strong> <strong>de</strong> <strong>Suporte</strong> <strong>N2</strong>. Foi uma mudança significativa, onde me desafiei diariamente a resolver problemas complexos com agilidade e eficiência, <strong>sempre</strong> buscando soluções que fizessem a <strong>diferença</strong> <strong>para</strong> <strong>o</strong> <strong>cliente</strong>.
                        </p>
                        <br></br>
                        <p>
                        Atualmente, atuo como <strong>Analista</strong> <strong>de</strong> <strong>Automação</strong> <strong>de</strong> <strong>Processos</strong> <strong>na</strong> <strong>Positivo</strong> <strong>Tecnologia</strong>, onde lidero projetos que têm como objetivo otimizar operações e automatizar processos internos. Cada projeto que encaro é mais do que um desafio técnico — <strong>é</strong> <strong>uma</strong> <strong>chance</strong> <strong>de</strong> <strong>melhorar</strong> <strong>a</strong> <strong>forma</strong> <strong>como</strong> <strong>as</strong> <strong>pessoas</strong> <strong>trabalham</strong> <strong>e</strong> <strong>se</strong> <strong>comunicam</strong>. O impacto real e positivo que posso gerar é o que me motiva a continuar inovando.
                        </p>
                        <br></br>
                        <p>
                        Entre os marcos da minha carreira, destaco o <strong>EsDataBase</strong>, um projeto que exigiu de mim criatividade e habilidade técnica para desenvolver uma solução robusta e escalável. Mesmo após sua descontinuação, as lições que aprendi com esse projeto permanecem comigo e moldam minha abordagem como desenvolvedor.
                        </p>
                        <br></br>
                        <p>
                        Eu acredito que tecnologia é mais do que código — <strong>é</strong> <strong>sobre</strong> <strong>transformar</strong> <strong>ideias</strong> <strong>em</strong> <strong>algo</strong> <strong>prático</strong>, <strong>que</strong> <strong>melhore</strong> <strong>a</strong> <strong>vida</strong> <strong>das</strong> <strong>pessoas</strong>. É assim que vejo cada desafio: uma oportunidade de inovar e criar algo de valor. Minha história é marcada por esforço e dedicação, e é isso que levo comigo em cada novo projeto.
                        </p>
                    </div>

                    {/* Segunda coluna: imagem ou outro conteúdo */}
                    <div className="about-extra">
                        <div className="image-card">
                            <img src="/perfil/AboutIcon.png" alt="José Enoque" className="about-image" />
                        </div>
                    {/* Ou substitua a imagem por uma lista de conquistas, se preferir */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
