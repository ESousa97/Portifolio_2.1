import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutAnimations({ titleRef, paragraphRefs, imageRef }) {
  const isDesktop = window.innerWidth > 1000;
  if (!isDesktop) return null;

  const duration = 0.6;
  const easing = "power3.out";

  // 🎯 Animação do título (entra antes e suavemente)
  gsap.fromTo(
    titleRef.current,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      ease: easing,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%", // Inicia mais cedo na rolagem
        toggleActions: "play none none reverse",
      },
    }
  );

  // 🎯 Animação dos parágrafos — cada um entra independente, sem scrub
  paragraphRefs.current.forEach((el, index) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: duration + index * 0.1,
        ease: easing,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // 🎯 Animação da imagem da direita (mantém scrub)
  gsap.fromTo(
    imageRef.current,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration,
      ease: easing,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    }
  );

  return null;
}

export default AboutAnimations;
