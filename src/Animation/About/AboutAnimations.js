// src/Animation/About/AboutAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutAnimations({ titleRef, paragraphRefs, imageRef }) {
    const screenWidth = window.innerWidth;
    const isDesktop = screenWidth > 1000; // Verifica se a tela é maior que 1000px

    if (isDesktop) {
        // Animações completas para desktop
        const animationDuration = 0.5;
        const animationScale = 1;

        // Animação para o título com efeito de reverso e scrub
        gsap.fromTo(
            titleRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: animationDuration,
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

        // Animação para os parágrafos
        gsap.fromTo(
            paragraphRefs.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: animationDuration,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: paragraphRefs.current[0],
                    start: "top 90%",
                    end: "top 30%",
                    toggleActions: "play reverse play reverse",
                    scrub: 1,
                },
                stagger: 0.1,
            }
        );

        // Animação para a imagem
        gsap.fromTo(
            imageRef.current,
            { scale: 0.8, opacity: 0 },
            {
                scale: animationScale,
                opacity: 1,
                duration: animationDuration + 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play reverse play reverse",
                    scrub: 1,
                },
            }
        );
    }

    return null;
}

export default AboutAnimations;
