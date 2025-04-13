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
                        Eu sou <strong>José Enoque</strong>, e minha jornada na tecnologia nasceu da <strong>resiliência</strong> e da <strong>vontade de vencer</strong>. Antes de entrar na área, trabalhei como <strong>ajudante de pedreiro</strong>, <strong>estoquista</strong> e em <strong>carga e descarga</strong> de supermercado — experiências que me ensinaram na prática o valor da <strong>disciplina</strong>, <strong>força de vontade</strong> e <strong>comprometimento</strong>. Essas raízes humildes moldaram o profissional focado e determinado que sou hoje.
                    </p>
                    <br />
                    <p ref={(el) => setParagraphRef(el, 1)}>
                        Em 2022, iniciei minha formação em <strong>Engenharia da Computação</strong> e entrei para o mundo da TI como <strong>estagiário de Service Desk</strong>. Pouco tempo depois, fui promovido a <strong>Analista de Suporte N2</strong> pela <strong>Tecnocomp</strong>, onde administrei servidores, automatizei processos técnicos e prestei suporte em ambientes de alta criticidade, sempre buscando <strong>resolver problemas complexos com agilidade</strong> e <strong>entregar soluções práticas</strong>.
                    </p>
                    <br />
                    <p ref={(el) => setParagraphRef(el, 2)}>
                        Na <strong>Positivo Tecnologia</strong>, evoluí para <strong>Analista de Automação de Processos Pleno</strong> e, mais tarde, para <strong>Analista de Suporte Pleno</strong>, liderando projetos que <strong>automatizam rotinas críticas</strong>, melhoram a performance de infraestrutura e integram <strong>IA generativa</strong> e <strong>engenharia de prompts</strong> para acelerar diagnósticos e eliminar tarefas repetitivas. Meu foco é <strong>entregar eficiência escalável</strong>, com soluções que geram impacto real.
                    </p>
                    <br />
                    <p ref={(el) => setParagraphRef(el, 3)}>
                        Entre os destaques da minha trajetória está o <strong>EsDataBase</strong>, um projeto completo de automação e visualização de dados, com <strong>back-end em Node.js</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>AWS</strong> e <strong>front-end em Next.js</strong>. Desenvolvi também ferramentas como o <strong>Automation GUI</strong>, um app modular para padronização de terminais Windows, e o <strong>ExNeural</strong>, sistema de análise de indicadores com <strong>IA e visualização em tempo real</strong>.
                    </p>
                    <br />
                    <p ref={(el) => setParagraphRef(el, 4)}>
                        Acredito que a <strong>tecnologia é uma ponte</strong> entre ideias e transformação. Minha missão é usar código para <strong>resolver problemas reais</strong>, <strong>melhorar a experiência das pessoas</strong> e <strong>inovar com propósito</strong>. Sigo evoluindo constantemente, me aprofundando em <strong>automação, desenvolvimento full stack, infraestrutura e inteligência artificial</strong> — sempre com os pés no chão, mas o olhar voltado para o futuro.
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
