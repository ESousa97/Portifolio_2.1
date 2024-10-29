import React, { useRef, useEffect } from "react";
import ModelNavigator from "../utils/ModelNavigator";
import GithubLanguagesChart from "../Graphics/GithubLanguagesChart";
import "../styles/Skills.css";

function Skills() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const modelNavigatorRef = useRef(null);
  const graphRef = useRef(null);

  useEffect(() => {
    // Configura as referências para o componente de animação se necessário
  }, []);

  return (
    <div className="skills-wrapper">

      <div className="header-content">
        <h1 ref={titleRef} className="timeline-title">Skills</h1>
        <p ref={descriptionRef} className="timeline-description">
          Aqui estão algumas das principais habilidades e ferramentas que utilizo.
        </p>
      </div>

      <div className="skills-content">
        <div ref={modelNavigatorRef} className="model-navigator-container">
          <ModelNavigator />
        </div>
        
        <div ref={graphRef} className="graph-container">
          <GithubLanguagesChart />
        </div>
      </div>
    </div>
  );
}

export default Skills;
