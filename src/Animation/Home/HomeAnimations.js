// src/Animation/Home/HomeAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomeAnimations({ titleRef, paragraphRefs, buttonLeftRef, buttonRightRef, imageRef, columnRightRef }) {
    // Animação para o título saindo da tela conforme o scroll
    gsap.fromTo(
        titleRef.current,
        { x: 0, opacity: 1 }, // Começa visível
        {
            x: -1000, // Sai para a esquerda
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 10%", // Inicia o movimento ao rolar para baixo
                end: "top -100%", // Termina quando está fora da viewport
                toggleActions: "none play none reverse",
                scrub: 1,
            },
        }
    );

    // Animação para o botão esquerdo
    gsap.fromTo(
        buttonLeftRef.current,
        { x: 0, opacity: 1 }, // Começa visível
        {
            x: -1000, // Sai para a esquerda
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: buttonLeftRef.current,
                start: "top 50%",
                end: "top -100%",
                toggleActions: "none play none reverse",
                scrub: 1,
            },
        }
    );

    // Animação para os parágrafos com efeito sequencial
    paragraphRefs.current.forEach((p, index) => {
        gsap.fromTo(
            p,
            { x: 0, opacity: 1 }, // Começa visível
            {
                x: -1000, // Sai para a esquerda
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: p,
                    start: "top 20%",
                    end: "top -100%",
                    toggleActions: "none play none reverse",
                    scrub: 1,
                    delay: index * 0.1, // Efeito sequencial de saída
                },
            }
        );
    });

    // Animação para a coluna direita
    gsap.fromTo(
        columnRightRef.current,
        { x: 0, opacity: 1 }, // Começa visível
        {
            x: 1000, // Sai para a direita
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: columnRightRef.current,
                start: "top 50%",
                end: "top -100%",
                toggleActions: "none play none reverse",
                scrub: 1,
            },
        }
    );

    // Animação para o botão direito
    gsap.fromTo(
        buttonRightRef.current,
        { x: 0, opacity: 1 }, // Começa visível
        {
            x: 1000, // Sai para a direita
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: buttonRightRef.current,
                start: "top 50%",
                end: "top -100%",
                toggleActions: "none play none reverse",
                scrub: 1,
            },
        }
    );

    return null;
}

export default HomeAnimations;
