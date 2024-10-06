import React, { useState, useMemo } from "react";
import ThreeDViewer from "./ThreeDViewer";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../styles/ModelNavigator.css";

function ModelNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="model-navigator-container">
      {/* Botão de navegação à esquerda */}
      <button onClick={handlePrev} className="nav-button nav-left">
        <FiArrowLeft size={24} />
      </button>

      {/* Componente de visualização 3D */}
      <div className="model-viewer">
        <ThreeDViewer currentIndex={currentIndex} models={models} />
      </div>

      {/* Botão de navegação à direita */}
      <button onClick={handleNext} className="nav-button nav-right">
        <FiArrowRight size={24} />
      </button>
    </div>
  );
}

export default ModelNavigator;
