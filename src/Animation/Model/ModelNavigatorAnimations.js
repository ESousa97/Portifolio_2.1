// src/Animation/ModelNavigator/ModelNavigatorAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function ModelNavigatorAnimations({ modelNavigatorRef }) {
  useEffect(() => {
    const isDesktop = window.innerWidth > 768; // Verifica se a tela é maior que 768px

    // Ajustes para dispositivos móveis
    const animationDuration = isDesktop ? 0.6 : 0.3; // Duração mais curta para dispositivos móveis
    const animationDistance = isDesktop ? -200 : 0; // Remove o deslocamento em dispositivos móveis

    // Animação para o contêiner do ModelNavigator
    gsap.fromTo(
      modelNavigatorRef.current,
      { x: isDesktop ? animationDistance : 0, opacity: 0 }, // Sem deslocamento em mobile
      {
        x: 0,
        opacity: 1,
        duration: animationDuration,
        ease: "power3.out",
        scrollTrigger: isDesktop
          ? {
              trigger: modelNavigatorRef.current,
              start: "top 80%",
              end: "top 0%",
              toggleActions: "play reverse play reverse",
              scrub: 0.5,
            }
          : null, // Remove ScrollTrigger em dispositivos móveis
      }
    );
  }, [modelNavigatorRef]);

  return null;
}

export default ModelNavigatorAnimations;
