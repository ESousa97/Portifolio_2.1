import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function GithubLanguagesChartAnimations({ graphContainerRef }) {
  useEffect(() => {
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
          start: "top 80%",           // Inicia a animação quando 90% do gráfico está visível
          end: "bottom bottom",       // Conclui a animação quando o final do gráfico atinge o final da viewport
          toggleActions: "play reverse play reverse",
          scrub: 0.8,                 // Mantém a animação sincronizada, mas mais rápida
        },
      }
    );
  }, [graphContainerRef]);

  return null;
}

export default GithubLanguagesChartAnimations;
