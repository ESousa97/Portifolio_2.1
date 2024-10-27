// src/Animation/About/AboutAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutAnimations({ titleRef, paragraphRefs, imageRef }) {
    // Animação para o título
    gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play reverse play reverse",
                scrub: 1,
            },
        }
    );

    // Animação para os parágrafos em sequência, com delays ajustados para entrada ordenada
    paragraphRefs.current.forEach((p, index) => {
        gsap.fromTo(
            p,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: p,
                    start: "top 90%", // Inicia a animação conforme o parágrafo entra na viewport
                    end: "top 30%", // Mantém a animação enquanto visível e começa a sair conforme rolado
                    toggleActions: "play reverse play reverse",
                    scrub: 1,
                    delay: index * 0.1, // Delay leve para efeito em sequência
                },
            }
        );
    });

    // Animação para a imagem ou conteúdo extra da segunda coluna
    gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 85%",
                end: "top 30%",
                toggleActions: "play reverse play reverse",
                scrub: 1,
            },
        }
    );

    return null;
}

export default AboutAnimations;
