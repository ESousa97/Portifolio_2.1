// src/components/Skills.js
import React from 'react';
import ModelNavigator from '../utils/ModelNavigator';
import GithubLanguagesChart from '../Graphics/GithubLanguagesChart';
import HeaderContentAnimation from '../Animation/Skills/SkillsAnimation';
import '../styles/Skills.css';

function Skills() {
  return (
    <div className="skills-wrapper">
      {/* Componente de animação para o título e descrição */}
      <HeaderContentAnimation
        title="Skills"
        description="Aqui estão algumas das principais habilidades e ferramentas que utilizo."
      />

      {/* Wrapper dos componentes ModelNavigator e GithubLanguagesChart */}
      <div className="skills-content">
        <div className="model-navigator-container">
          <ModelNavigator />
        </div>

        <div className="graph-container">
          <GithubLanguagesChart />
        </div>
      </div>
    </div>
  );
}

export default Skills;
