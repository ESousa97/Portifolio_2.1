// src/Animation/Projects/ProjectsAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function ProjectsAnimations({ titleRef, descriptionRef, leftRefs, rightRefs, graphTitleRef, skillsRefs }) {
  useEffect(() => {
    // Animação para o título principal com parallax leve
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 20%",
          toggleActions: "play reverse play reverse",
          scrub: 1,
        },
      }
    );

    // Animação para a descrição principal com fade-in e deslocamento
    gsap.fromTo(
      descriptionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 90%", 
          end: "top 20%",
          toggleActions: "play reverse play reverse",
          scrub: 1,
        },
      }
    );

    // Animação para as imagens dos projetos com efeito de fade
    leftRefs.current.forEach((leftElem, index) => {
      const rightElem = rightRefs.current[index];

      // Animação da imagem com efeito de fade
      gsap.fromTo(
        leftElem,
        { opacity: 0 }, // Inicia com transparência
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftElem,
            start: "top 90%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            scrub: 0.8,
          },
        }
      );

      // Animação agressiva para o texto
      gsap.fromTo(
        rightElem,
        { x: 300, opacity: 0 }, // Aumenta o deslocamento inicial para um efeito mais forte
        {
          x: 0,
          opacity: 1,
          duration: 0.6, // Duração menor para entrada mais rápida
          ease: "power4.out", // Efeito mais agressivo
          scrollTrigger: {
            trigger: rightElem,
            start: "top 90%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            scrub: 0.5,
          },
        }
      );
    });
  }, [titleRef, descriptionRef, leftRefs, rightRefs, graphTitleRef, skillsRefs]);

  return null;
}

export default ProjectsAnimations;
