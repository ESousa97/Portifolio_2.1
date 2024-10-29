// src/Animation/GithubLanguagesChartAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function GithubLanguagesChartAnimations({ graphContainerRef }) {
  useEffect(() => {
    // Animação para o gráfico com efeito de cortina abrindo do centro, sincronizado com o scroll
    gsap.fromTo(
      graphContainerRef.current,
      { 
        clipPath: "inset(0 50% 0 50%)", // Começa com gráfico oculto pelas bordas
        opacity: 0 
      },
      {
        clipPath: "inset(0% 0% 0% 0%)", // Abre a cortina do centro para os lados
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: graphContainerRef.current,
          start: "top 80%",           // Inicia um pouco antes do gráfico estar totalmente visível
          end: "bottom+=20% top",     // Conclui a animação quando o gráfico está 100% visível
          toggleActions: "play reverse play reverse",
          scrub: 0.8,                  // Sincroniza com o scroll para um efeito suave e contínuo
        },
      }
    );
  }, [graphContainerRef]);

  return null;
}

export default GithubLanguagesChartAnimations;
