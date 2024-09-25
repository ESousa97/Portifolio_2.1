import React, { useMemo, useState } from "react";
import ThreeDViewer from "../utils/ThreeDViewer.js";
import Carousel from "../utils/Carousel.js";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../styles/Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  ];

  const models = useMemo(
    () => [
      "/models/Api.glb",
      "/models/BootStrap.glb",
      "/models/Css3.glb",
      "/models/Git.glb",
      "/models/GitHub.glb",
      "/models/Html5.glb",
      "/models/JavaScript.glb",
      "/models/Linux.glb",
      "/models/MongoDb.glb",
      "/models/MySql.glb",
      "/models/NextJs.glb",
      "/models/NodeJs.glb",
      "/models/PostgreeSql.glb",
      "/models/Python.glb",
      "/models/React.glb",
      "/models/Sql.glb",
      "/models/ThreeJs.glb",
      "/models/TypeScript.glb",
      "/models/VisualCode.glb",
    ],
    []
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  return (
    <>
      {/* O conteúdo principal do projeto */}
      <div className="projects-container">
        <div className="left-side">
          <button onClick={handlePrev} className="nav-button nav-left">
            <FiArrowLeft size={24} />
          </button>
          <ThreeDViewer currentIndex={currentIndex} models={models} />
          <button onClick={handleNext} className="nav-button nav-right">
            <FiArrowRight size={24} />
          </button>
        </div>
        <div className="right-side">
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
