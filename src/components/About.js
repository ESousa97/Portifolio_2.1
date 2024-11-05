import React, { useRef, useEffect } from 'react';
import AboutAnimations from '../Animation/About/AboutAnimations'; // Importa o módulo de animações
import '../styles/About.css';

function About() {
    // Referências para os elementos
    const titleRef = useRef(null);
    const paragraphRefs = useRef([]);
    const imageRef = useRef(null);

    // Função para adicionar referências aos parágrafos
    const setParagraphRef = (el, index) => {
        if (el && !paragraphRefs.current[index]) {
            paragraphRefs.current[index] = el;
        }
    };

    // Executa as animações ao carregar o componente
    useEffect(() => {
        AboutAnimations({
            titleRef,
            paragraphRefs,
            imageRef,
        });
    }, []);

    return (
        <div className="about">
            <div className="about-content">
                <h1 ref={titleRef}>Sobre Mim</h1>
                <div className="about-columns">
                    {/* Primeira coluna: texto */}
                    <div className="about-text">
                        <p ref={(el) => setParagraphRef(el, 0)}>
                            Eu sou <strong>José</strong> <strong>Enoque</strong>, e minha jornada com a tecnologia começou de forma inesperada. Antes de descobrir meu caminho na área, trabalhei como ajudante de pedreiro, estoquista e ajudante de carga e descarga em um supermercado. Foi ali, em meio ao esforço físico e à rotina intensa, que aprendi a importância da resiliência e da dedicação. Essas lições simples, porém profundas, me moldaram e continuam a guiar minha trajetória até hoje.
                        </p>
                        <br></br>
                        <p ref={(el) => setParagraphRef(el, 1)}>
                            Decidi seguir um novo rumo e mergulhei no universo da tecnologia. Comecei como <strong>estagiário</strong> de <strong>Service Desk</strong> na <strong>Tecnocomp Tecnologia e Serviços</strong>, onde minha curiosidade e vontade de aprender rapidamente me levaram a uma <strong>promoção</strong> para <strong>Técnico de Suporte N2</strong>. Foi uma mudança significativa, onde me desafiei diariamente a resolver problemas complexos com agilidade e eficiência, <strong>sempre</strong> buscando soluções que fizessem a <strong>diferença</strong> para o <strong>cliente</strong>.
                        </p>
                        <br></br>
                        <p ref={(el) => setParagraphRef(el, 2)}>
                            Atualmente, atuo como <strong>Analista de Automação de Processos</strong> na <strong>Positivo Tecnologia</strong>, onde lidero projetos que têm como objetivo otimizar operações e automatizar processos internos. Cada projeto que encaro é mais do que um desafio técnico — <strong>é</strong> <strong>uma</strong> <strong>chance</strong> de <strong>melhorar</strong> a <strong>forma</strong> como as <strong>pessoas</strong> trabalham e se <strong>comunicam</strong>. O impacto real e positivo que posso gerar é o que me motiva a continuar inovando.
                        </p>
                        <br></br>
                        <p ref={(el) => setParagraphRef(el, 3)}>
                            Entre os marcos da minha carreira, destaco o <strong>EsDataBase</strong>, um projeto que exigiu de mim criatividade e habilidade técnica para desenvolver uma solução robusta e escalável. Mesmo após sua descontinuação, as lições que aprendi com esse projeto permanecem comigo e moldam minha abordagem como desenvolvedor.
                        </p>
                        <br></br>
                        <p ref={(el) => setParagraphRef(el, 4)}>
                            Eu acredito que tecnologia é mais do que código — <strong>é</strong> sobre <strong>transformar ideias</strong> em <strong>algo prático</strong>, que melhore a <strong>vida</strong> das <strong>pessoas</strong>. É assim que vejo cada desafio: uma oportunidade de inovar e criar algo de valor. Minha história é marcada por esforço e dedicação, e é isso que levo comigo em cada novo projeto.
                        </p>
                    </div>

                    {/* Segunda coluna: imagem ou conteúdo extra */}
                    <div className="about-extra" ref={imageRef}>
                        <div className="image-card">
                            <img src="/perfil/AboutIcon.png" alt="José Enoque" className="about-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
