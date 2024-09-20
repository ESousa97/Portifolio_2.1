// src/components/Projects.js
import React from "react";
import GLBCarousel from "../utils/GLBCarousel"; // Importa o componente do carrossel
import "../styles/Projects.css";
import "../styles/SmallScreenAdjustments.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>Here are some of my works.</p>
      
      {/* Renderiza o carrossel de objetos GLB */}
      <GLBCarousel />
    </div>
  );
}

export default Projects;
