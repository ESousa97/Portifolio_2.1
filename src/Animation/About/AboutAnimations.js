import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutAnimations({ titleRef, paragraphRefs, imageRef }) {
    // Animação para o título com efeito de reverso e scrub
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

    // Animação para os parágrafos em sequência com stagger e scrub
    gsap.fromTo(
        paragraphRefs.current,
        { x: -100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: paragraphRefs.current[0], // Gatilho a partir do primeiro parágrafo
                start: "top 90%",
                end: "top 30%",
                toggleActions: "play reverse play reverse",
                scrub: 1,
            },
            stagger: 0.1, // Efeito em sequência
        }
    );

    // Animação para a imagem ou conteúdo extra com efeito de reverso e scrub
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
