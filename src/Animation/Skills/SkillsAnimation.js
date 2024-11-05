// src/components/HeaderContentAnimation.js
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeaderContentAnimation({ title, description }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Animação para o título (h1) vindo da direita
    gsap.fromTo(
      titleRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
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

    // Animação para a descrição (p) vindo da esquerda
    gsap.fromTo(
      descriptionRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
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
  }, []);

  return (
    <div className="header-content">
      <h1 ref={titleRef} className="timeline-title">{title}</h1>
      <p ref={descriptionRef} className="timeline-description">{description}</p>
    </div>
  );
}

export default HeaderContentAnimation;
