// src/components/ModelNavigator.js
import React, { useState, useMemo, useRef } from "react";
import ThreeDViewer from "./ThreeDViewer";
import ModelNavigatorAnimations from "../Animation/Model/ModelNavigatorAnimations.js";
import "../styles/ModelNavigator.css";

function ModelNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modelNavigatorRef = useRef(null);

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
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div ref={modelNavigatorRef} className="model-navigator-container">
      <ModelNavigatorAnimations modelNavigatorRef={modelNavigatorRef} />

      <div className="model-viewer">
        {/* Passa a largura da tela para o ThreeDViewer para otimizações específicas */}
        <ThreeDViewer
          currentIndex={currentIndex}
          models={models}
          onNavigate={handleNavigate}
        />
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
    </div>
  );
}

export default ModelNavigator;
