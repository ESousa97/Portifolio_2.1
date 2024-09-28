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
      {/* ModelNavigator renderizado fora do container principal */}
      <ModelNavigator />

      {/* Conteúdo principal do projeto */}
      <div className="projects-container">
        <div className="left-text">
          {/* Podemos deixar o espaço em branco ou adicionar outra coisa, já que o ModelNavigator não está mais aqui */}
        </div>
        <div className="right-text">
          <div className="project-info">
            <h1>My Projects</h1>
            <p>Use as setas do teclado ou os botões laterais para navegar entre os modelos.</p>
          </div>
        </div>
      </div>

      {/* Carrossel de cards */}
      <Carousel cards={cards} />
    </>
  );
}

export default Projects;
