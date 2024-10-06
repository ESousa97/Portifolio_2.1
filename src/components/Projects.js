import React from "react";
import Carousel from "../utils/Carousel.js";
import ModelNavigator from "../utils/ModelNavigator.js"; // Novo componente
import "../styles/Projects.css";

function Projects() {
  const cards = [
    {
      title: "Base Dados IMC",
      imgPath: "/Icons/BaseDadosIMC.png",
      url: "https://base-dados-imc.vercel.app/index.html",
      description: "Base de dados para cálculos de IMC.",
    },
    {
      title: "ES Data Base",
      imgPath: "/Icons/ESDataBase.png",
      url: "https://esdatabase.vercel.app/login",
      description: "Sistema de banco de dados para empresas.",
    },
    {
      title: "Meu primeiro portifólio",
      imgPath: "/Icons/Portifolio.png",
      url: "https://portifolio-sousadev97.vercel.app/",
      description: "Esse foi o segundo projeto desenvolvido ao longo da minha carreira.",
    },
    {
      title: "Prompt de Comando Windows",
      imgPath: "/Icons/PromptComandoWindowsIcon.png",
      url: "https://prompt-comando.vercel.app/",
      description: "Projeto desenvolvido como parte de estudo da Alura em parceria com o Google.",
    },
    {
      title: "Alura Books",
      imgPath: "/Icons/AluraBooksIcon.png",
      url: "https://alurabooks-one-zeta.vercel.app/",
      description: "Projeto desenvolvido como parte de estudo da Alura.",
    },
  ];

    return (
      <>
      {/* App Container que contém .left-side e .projects-container */}
      <div className="app-container">
        {/* Componente ModelNavigator posicionado à direita */}
        <div className="left-side">
          <ModelNavigator />
        </div>

        {/* Conteúdo do Projects posicionado à esquerda */}
        <div className="projects-container">
          {/* Título centralizado */}
          <h1>My Projects</h1>

          {/* Descrição abaixo do título e alinhada à esquerda */}
          <div className="project-info">
            <p>Use as setas do teclado ou os botões laterais para navegar entre os modelos.</p>
          </div>
        </div>
      </div>

      {/* Carrossel de cards renderizado abaixo do app-container */}
      <div className="carousel-container">
        <Carousel cards={cards} />
      </div>
    </>
  );
}

export default Projects;
