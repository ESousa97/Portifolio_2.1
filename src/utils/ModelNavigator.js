import React, { useState, useMemo } from "react";
import { FaHandPointer } from "react-icons/fa";
import ThreeDViewer from "./ThreeDViewer";
import "../styles/ModelNavigator.css";

function ModelNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

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

  const handleNavigate = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
    } else if (direction === "prev") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
    }
    setShowHint(false); // Oculta a dica ao navegar
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setShowHint(false); // Oculta a dica ao clicar nos pontos
  };

  return (
    <div className="model-navigator-container">
      <div className="model-viewer">
        <ThreeDViewer currentIndex={currentIndex} models={models} onNavigate={handleNavigate} />
      </div>

      <div className="progress-indicator">
        {models.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {showHint && (
        <div className="navigation-hint" onClick={() => setShowHint(false)}>
          <FaHandPointer className="hint-icon" />
          <p>Explore usando as setas do teclado, os pontos abaixo ou interagindo com o objeto.</p>
        </div>
      )}
    </div>
  );
}

export default ModelNavigator;
