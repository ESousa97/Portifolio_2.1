// src/Animation/Projects/ProjectsAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function ProjectsAnimations({
  titleRef,
  descriptionRef,
  leftRefs,
  rightRefs,
  graphTitleRef,
  skillsRefs,
}) {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isDesktop = screenWidth > 1000; // Verifica se a tela é maior que 1000px

    if (isDesktop) {
      // Animações completas para desktop
      const animationDuration = 1;
      const textOffset = 300;

      // Animação para o título principal com parallax leve
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: animationDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            end: 'top 20%',
            toggleActions: 'play reverse play reverse',
            scrub: 1,
          },
        }
      );

      // Animação para a descrição principal
      gsap.fromTo(
        descriptionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: animationDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 90%',
            end: 'top 20%',
            toggleActions: 'play reverse play reverse',
            scrub: 1,
          },
        }
      );

      // Animações para as imagens dos projetos
      leftRefs.current.forEach((leftElem, index) => {
        const rightElem = rightRefs.current[index];

        gsap.fromTo(
          leftElem,
          { opacity: 0 },
          {
            opacity: 1,
            duration: animationDuration + 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: leftElem,
              start: 'top 90%',
              end: 'top 30%',
              toggleActions: 'play reverse play reverse',
              scrub: 0.8,
            },
          }
        );

        gsap.fromTo(
          rightElem,
          { x: textOffset, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: rightElem,
              start: 'top 90%',
              end: 'top 30%',
              toggleActions: 'play reverse play reverse',
              scrub: 0.8,
            },
          }
        );
      });
    }

    // Nenhuma animação é aplicada se a largura da tela for menor ou igual a 1000px
  }, [titleRef, descriptionRef, leftRefs, rightRefs, graphTitleRef, skillsRefs]);

  return null;
}

export default ProjectsAnimations;
