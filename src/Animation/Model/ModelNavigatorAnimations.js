// src/Animation/ModelNavigator/ModelNavigatorAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function ModelNavigatorAnimations({ modelNavigatorRef }) {
  useEffect(() => {
    // Animação para o contêiner do ModelNavigator, vindo da direita
    gsap.fromTo(
      modelNavigatorRef.current,
      { x: 200, opacity: 0 }, // Começa fora da tela, à direita
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: modelNavigatorRef.current,
          start: "top 95%", // Começa mais cedo, quando está mais próximo do topo
          end: "top 40%", // Termina mais cedo
          toggleActions: "play reverse play reverse",
          scrub: 0.5, // Reduzido para resposta mais rápida
        },
      }
    );
  }, [modelNavigatorRef]);

  return null;
}

export default ModelNavigatorAnimations;
