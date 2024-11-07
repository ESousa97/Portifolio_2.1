// src/components/HeaderContentAnimation.js
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeaderContentAnimation({ title, description }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isDesktop = screenWidth > 1000; // Verifica se a tela é maior que 1000px

    if (isDesktop) {
      // Animações completas para desktop
      const animationDuration = 0.6;
      const animationDistance = 200;

      // Animação para o título (h1)
      gsap.fromTo(
        titleRef.current,
        { x: animationDistance, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: animationDuration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
            scrub: 0.5,
          },
        }
      );

      // Animação para a descrição (p)
      gsap.fromTo(
        descriptionRef.current,
        { x: -animationDistance, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: animationDuration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 90%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
            scrub: 0.5,
          },
        }
      );
    }

    // Nenhuma animação é aplicada se a largura da tela for menor ou igual a 1000px
  }, []);

  return (
    <div className="header-content">
      <h1 ref={titleRef} className="timeline-title">{title}</h1>
      <p ref={descriptionRef} className="timeline-description">{description}</p>
    </div>
  );
}

export default HeaderContentAnimation;
