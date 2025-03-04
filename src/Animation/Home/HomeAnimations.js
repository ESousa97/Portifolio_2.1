// src/Animation/Home/HomeAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomeAnimations({ titleRef, paragraphRefs, buttonLeftRef, buttonRightRef, imageRef, columnRightRef }) {
    const screenWidth = window.innerWidth;
    const isDesktop = screenWidth > 1000; // Verifica se a tela é maior que 1000px

    if (isDesktop) {
        // Animações completas para desktop
        const animationDistance = 1000; // Distância de animação para desktop

        gsap.fromTo(
            titleRef.current,
            { x: 0, opacity: 1 },
            {
                x: -animationDistance,
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 10%",
                    end: "top -100%",
                    toggleActions: "none play none reverse",
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(
            buttonLeftRef.current,
            { x: 0, opacity: 1 },
            {
                x: -animationDistance,
                opacity: 0,
                duration: 0.3,
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

        paragraphRefs.current.forEach((p, index) => {
            gsap.fromTo(
                p,
                { x: 0, opacity: 1 },
                {
                    x: -animationDistance,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: p,
                        start: "top 20%",
                        end: "top -100%",
                        toggleActions: "none play none reverse",
                        scrub: 1,
                        delay: index * 0.1,
                    },
                }
            );
        });

        gsap.fromTo(
            columnRightRef.current,
            { x: 0, opacity: 1 },
            {
                x: animationDistance,
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

        gsap.fromTo(
            buttonRightRef.current,
            { x: 0, opacity: 1 },
            {
                x: animationDistance,
                opacity: 0,
                duration: 0.3,
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
    } else {
        // Sem animações para dispositivos com largura de tela abaixo de 1000px
    }

    return null;
}

export default HomeAnimations;
