import React, { useState, useRef, useEffect } from "react";
import ProjectsAnimations from "../Animation/Projects/ProjectsAnimations";
import "../styles/Projects.css";

function Projects() {
  const [projects] = useState([
    {
      title: "Meu primeiro portfólio",
      imgPath: "/Projects/Portifolio.png",
      url: "https://portifolio-sousadev97.vercel.app/",
      description: "Esse projeto foi o segundo que desenvolvi ao longo da minha carreira. Lançado em outubro de 2022 e atualizado em julho de 2023, ele serve como uma vitrine do meu crescimento e das minhas habilidades como desenvolvedor. Nele, apresento minhas experiências, certificações e habilidades técnicas de forma organizada e acessível. O portfólio está disponível em Meu portfólio, com links diretos para minhas redes sociais e projetos, bem como uma seção detalhada com meus certificados.",
      createdAt: "10/2022",
      updatedAt: "07/2023",
    },
    {
      title: "Base Dados IMC",
      imgPath: "/Projects/BaseDadosImc.png",
      url: "https://base-dados-imc.vercel.app/index.html",
      description: "A Base Dados IMC foi o primeiro projeto de base de dados desenvolvido por mim. Representa uma importante conquista pessoal no aprendizado de tecnologias web como HTML5, CSS3 e JavaScript. Esta aplicação web foi concebida para fornecer uma plataforma de dados acessível e prática, com uma interface amigável e organizada. A página está disponível em Base Dados IMC e simboliza o início da minha jornada no desenvolvimento web.",
      createdAt: "01/2023",
      updatedAt: "08/2024",
    },
    {
      title: "ES Data Base",
      imgPath: "/Projects/EsDataBase.png",
      url: "https://www.esdatabase.com.br/login",
      description: "A ES Data Base é uma plataforma robusta e altamente escalável, projetada para gerenciar grandes volumes de dados com eficiência e segurança. Focada na gestão de procedimentos técnicos e operacionais, a plataforma oferece uma interface organizada e otimizada para o usuário final. Desenvolvida 100% por mim, desde o front-end até a comunicação com o banco de dados e a implementação de protocolos de segurança avançados, essa solução é ideal para ambientes corporativos de alta demanda.",
      createdAt: "03/2024",
      updatedAt: "10/2024"
    },
    {
      title: "Prompt de Comando Windows",
      imgPath: "/Projects/PromptComandoWindows.png",
      url: "https://prompt-comando.vercel.app/",
      description: "Esse projeto foi criado para facilitar a busca de comandos do Windows (cmd), fornecendo uma interface simples onde o usuário pode pesquisar e obter explicações rápidas sobre cada comando. O sistema utiliza uma estrutura de dados organizada e uma pesquisa eficiente para melhorar a usabilidade e fornecer resultados precisos.",
      createdAt: "09/2024",
      updatedAt: "09/2024",
    },
  ]);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectRefs = useRef([]);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
    leftRefs.current = leftRefs.current.slice(0, projects.length);
    rightRefs.current = rightRefs.current.slice(0, projects.length);
  }, [projects]);

  return (
    <div className="projects-wrapper">
      <ProjectsAnimations
        titleRef={titleRef}
        descriptionRef={descriptionRef}
        projectRefs={projectRefs}
        leftRefs={leftRefs}
        rightRefs={rightRefs}
      />

      <div className="header-content">
        <h1 ref={titleRef} className="projects-title">Projects</h1>
        <p ref={descriptionRef} className="projects-description">
          Aqui estão alguns dos meus principais projetos ao longo da minha carreira.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectItem
            project={project}
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            leftRef={(el) => (leftRefs.current[index] = el)}
            rightRef={(el) => (rightRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
}

// Componente ProjectItem, ainda parte de Projects.js
const ProjectItem = React.forwardRef(({ project, leftRef, rightRef }, ref) => (
  <div className="project-item" ref={ref}>
    <div className="project-image-container" ref={leftRef}>
      <img src={project.imgPath} alt={project.title} className="project-image" loading="lazy" />
    </div>
    <div className="project-description" ref={rightRef}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Data de Criação:</strong> {project.createdAt}</p>
      <p><strong>Última Atualização:</strong> {project.updatedAt}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
        Ver Projeto
      </a>
    </div>
  </div>
));

export default Projects;
