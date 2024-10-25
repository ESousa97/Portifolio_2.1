import React, { useState, useEffect } from "react";
import ModelNavigator from "../utils/ModelNavigator.js";
import "../styles/Projects.css";

// Obter o token da variável de ambiente
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

function Projects() {
  const [projects] = useState([
    {
      title: "Meu primeiro portfólio",
      imgPath: "/Icons/Portifolio.png",
      url: "https://portifolio-sousadev97.vercel.app/",
      description: "Esse projeto foi o segundo que desenvolvi ao longo da minha carreira. Lançado em outubro de 2022 e atualizado em julho de 2023, ele serve como uma vitrine do meu crescimento e das minhas habilidades como desenvolvedor. Nele, apresento minhas experiências, certificações e habilidades técnicas de forma organizada e acessível. O portfólio está disponível em Meu portfólio, com links diretos para minhas redes sociais e projetos, bem como uma seção detalhada com meus certificados.",
      createdAt: "10/2022",
      updatedAt: "07/2023",
    },
    {
      title: "Base Dados IMC",
      imgPath: "/Icons/BaseDadosIMC.png",
      url: "https://base-dados-imc.vercel.app/index.html",
      description: "A Base Dados IMC foi o primeiro projeto de base de dados desenvolvido por mim. Representa uma importante conquista pessoal no aprendizado de tecnologias web como HTML5, CSS3 e JavaScript. Esta aplicação web foi concebida para fornecer uma plataforma de dados acessível e prática, com uma interface amigável e organizada. A página está disponível em Base Dados IMC e simboliza o início da minha jornada no desenvolvimento web.",
      createdAt: "01/2023",
      updatedAt: "08/2024",
    },
    {
      "title": "ES Data Base",
      "imgPath": "/Icons/ESDataBase.png",
      "url": "https://www.esdatabase.com.br/login",
      "description": "A ES Data Base é uma plataforma robusta e altamente escalável, projetada para gerenciar grandes volumes de dados com eficiência e segurança. Focada na gestão de procedimentos técnicos e operacionais, a plataforma oferece uma interface organizada e otimizada para o usuário final. Desenvolvida 100% por mim, desde o front-end até a comunicação com o banco de dados e a implementação de protocolos de segurança avançados, essa solução é ideal para ambientes corporativos de alta demanda.",
      createdAt: "03/2024",
      updatedAt: "10/2024"
    },
    {
      title: "Prompt de Comando Windows",
      imgPath: "/Icons/PromptComandoWindowsIcon.png",
      url: "https://prompt-comando.vercel.app/",
      description: "Esse projeto foi criado para facilitar a busca de comandos do Windows (cmd), fornecendo uma interface simples onde o usuário pode pesquisar e obter explicações rápidas sobre cada comando. O sistema utiliza uma estrutura de dados organizada e uma pesquisa eficiente para melhorar a usabilidade e fornecer resultados precisos.",
      createdAt: "09/2024",
      updatedAt: "09/2024",
    },
  ]);

  const [languagesData, setLanguagesData] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchLanguages() {
    try {
      const response = await fetch("https://api.github.com/users/ESousa97/repos", {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }

      const repos = await response.json();

      let languages = {};

      for (const repo of repos) {
        const langResponse = await fetch(repo.languages_url, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });
        const repoLanguages = await langResponse.json();

        for (const [lang, value] of Object.entries(repoLanguages)) {
          languages[lang] = (languages[lang] || 0) + value;
        }
      }

      const total = Object.values(languages).reduce((acc, value) => acc + value, 0);
      const languagePercentages = Object.entries(languages)
        .map(([lang, value]) => ({
          language: lang,
          percentage: ((value / total) * 100).toFixed(2), // Exibir até 2 casas decimais
        }))
        .filter(lang => lang.percentage > 0); // Filtrar dados com porcentagem maior que 0

      setLanguagesData(languagePercentages);
    } catch (error) {
      setError(error.message);
    }
  }

  fetchLanguages();
}, []);

  return (
    <div className="projects-wrapper">
      {/* Centralizado no topo */}
      <div className="header-content">
        <h1 className="timeline-title">Projects</h1>
        <p className="timeline-description">
          Aqui estão alguns dos meus principais projetos ao longo da minha carreira.
        </p>
      </div>

      {/* ModelNavigator (objeto 3D) no início da linha do tempo */}
      <div className="model-navigator-container">
        <ModelNavigator />
      </div>

      {/* Timeline dos projetos */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </div>

      {/* Gráfico horizontal com título e porcentagens */}
      <div className="graph-container">
        <h2 className="graph-title">Habilidades</h2>
        <p className="graph-subtitle">Ferramentas que tenho contato diariamente</p>

        <div className="graph">
          {error ? (
            <p>{error}</p>
          ) : (
            <div className="skills-list">
              {languagesData.map((language, index) => (
                <div key={index} className="skill-bar">
                  <span className="skill-title">{language.language}</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${language.percentage}%` }} />
                    <span className="percentage">{language.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente ProjectItem para cada projeto
function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <div className="project-image-container">
        <img
          src={project.imgPath}
          alt={project.title}
          className="project-image"
          loading="lazy" // Lazy loading de imagens
        />
      </div>
      <div className="project-description">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><strong>Data de Criação:</strong> {project.createdAt}</p>
        <p><strong>Última Atualização:</strong> {project.updatedAt}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          aria-label={`Ver projeto ${project.title}`} // Acessibilidade melhorada
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
}

export default Projects;
