import React, { useState, useRef, useEffect } from "react";
import ProjectsAnimations from "../Animation/Projects/ProjectsAnimations";
import "../styles/Projects.css";

function Projects() {
  const [projects] = useState([
    {
      title: "Projportfolio",
      imgPath: "/Projects/projportfolio.png",
      url: "https://esdatabasev2.vercel.app/components",
      description: "Apresenta meus trabalhos de forma interativa e responsiva, com múltiplos formatos de visualização, suporte a temas claro/escuro, animações Lottie e consumo dinâmico de APIs — tudo projetado para evidenciar minhas habilidades em React, UI/UX e desenvolvimento full stack."
    }
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
        <h1 ref={titleRef} className="projects-title">Projetos</h1>
        <p ref={descriptionRef} className="projects-description">Uma jornada em código: do aprendizado à entrega real. Explore meus projetos em constante evolução no Projportfolio.
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
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
        Ver Projeto
      </a>
    </div>
  </div>
));

export default Projects;
