// src/components/GithubLanguagesChart.js
import React, { useState, useEffect, useRef } from "react";
import GithubLanguagesChartAnimations from "../Animation/Graphics/GithubLanguagesChartAnimations";
import "../styles/GithubLanguagesChart.css";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

function GithubLanguagesChart() {
  const [languagesData, setLanguagesData] = useState([]);
  const [error, setError] = useState(null);
  const graphContainerRef = useRef(null); // Referência para o contêiner do gráfico

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
            percentage: ((value / total) * 100).toFixed(2),
          }))
          .filter(lang => lang.percentage > 0);

        setLanguagesData(languagePercentages);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchLanguages();
  }, []);

  return (
    <div ref={graphContainerRef} className="graph-container">
      {/* Aplica a animação de entrada no contêiner do gráfico */}
      <GithubLanguagesChartAnimations graphContainerRef={graphContainerRef} />

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
  );
}

export default GithubLanguagesChart;
