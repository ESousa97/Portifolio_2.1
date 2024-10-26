// src/Animation/Home/HomeAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomeAnimations({ titleRef, paragraphRefs, buttonLeftRef, buttonRightRef, imageRef, columnRightRef }) {
    // Efeito de saída rápida para a coluna esquerda (Título e Botão Esquerdo)
    gsap.fromTo(
        titleRef.current,
        { x: 0 },
        {
            x: -1000,  // Sai rapidamente para a esquerda
            duration: 0.3,
            ease: "power3.in",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 0%",
                end: "top 100%",
                toggleActions: "play none none reverse",  // Ação direta e rápida
            },
        }
    );

    gsap.fromTo(
        buttonLeftRef.current,
        { x: 0 },
        {
            x: -1000,
            duration: 0.3,
            ease: "power3.in",
            scrollTrigger: {
                trigger: buttonLeftRef.current,
                start: "top 20%",
                end: "top 100%",
                toggleActions: "play none none reverse",
            },
        }
    );

    // Efeito para os parágrafos na coluna esquerda
    paragraphRefs.current.forEach((p, index) => {
        gsap.fromTo(
            p,
            { x: 0 },
            {
                x: -1000,
                duration: 0.3,
                delay: index * 0.1,  // Leve atraso para criar um efeito em sequência
                ease: "power3.in",
                scrollTrigger: {
                    trigger: p,
                    start: "top 0%",
                    end: "top 100%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });

    // Efeito de saída rápida para a coluna direita
    gsap.fromTo(
        columnRightRef.current,
        { x: 0 },
        {
            x: 1000,  // Sai rapidamente para a direita
            duration: 0.3,
            ease: "power3.in",
            scrollTrigger: {
                trigger: columnRightRef.current,
                start: "top 0%",
                end: "top 100%",
                toggleActions: "play none none reverse",
            },
        }
    );

    gsap.fromTo(
        buttonRightRef.current,
        { x: 0 },
        {
            x: 1000,
            duration: 0.3,
            ease: "power3.in",
            scrollTrigger: {
                trigger: buttonRightRef.current,
                start: "top 0%",
                end: "top 100%",
                toggleActions: "play none none reverse",
            },
        }
    );

    return null;
}

export default HomeAnimations;
