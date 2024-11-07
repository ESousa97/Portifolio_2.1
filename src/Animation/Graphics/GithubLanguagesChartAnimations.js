// src/Animation/GithubLanguagesChartAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function GithubLanguagesChartAnimations({ graphContainerRef }) {
  useEffect(() => {
    const isDesktop = window.innerWidth > 768; // Verifica se a tela é maior que 768px

    // Ajuste de animação para dispositivos móveis
    const animationDuration = isDesktop ? 0.8 : 0.5; // Animação mais curta para dispositivos móveis

    gsap.fromTo(
      graphContainerRef.current,
      { 
        clipPath: isDesktop ? "inset(0 50% 0 50%)" : "inset(0 0 0 0)", // Remove o efeito de clipPath em mobile
        opacity: 0 
      },
      {
        clipPath: "inset(0% 0% 0% 0%)", // Animação de abertura total
        opacity: 1,
        duration: animationDuration,
        ease: "power2.out",
        scrollTrigger: isDesktop
          ? {
              trigger: graphContainerRef.current,
              start: "top 80%",
              end: "bottom bottom",
              toggleActions: "play reverse play reverse",
              scrub: 0.8,
            }
          : null, // Remove ScrollTrigger em dispositivos móveis
      }
    );
  }, [graphContainerRef]);

  return null;
}

export default GithubLanguagesChartAnimations;
