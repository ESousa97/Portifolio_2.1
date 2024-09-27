import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/Carousel.css";

const EmblaCarousel = ({ cards }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    speed: 6, // Transição suave
    loop: false, // Desativar o loop interno para controlar manualmente
    align: "center", // Centraliza o item visível
    skipSnaps: false, // Garante que os snaps não sejam ignorados
  });

  const autoScrollRef = useRef(null);

  // Clona os primeiros e últimos slides para simular a rolagem infinita
  const clonedCards = [...cards, ...cards, ...cards];

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;

    autoScrollRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext(); // Avança para o próximo slide
      }
    }, 4000); // Intervalo de 4 segundos para a rotação automática
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      autoScroll(); // Inicia o auto-scroll quando o emblaApi é inicializado

      emblaApi.on("scrollEnd", () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        const lastIndex = cards.length; // Índice do último card original

        if (selectedIndex >= lastIndex) {
          // Se chegar ao final da lista clonada, voltar para o início de forma imperceptível
          emblaApi.scrollTo(0, false); // Muda sem animação
        }
      });

      // Pausa o auto-scroll durante a interação manual
      emblaApi.on("pointerDown", () => {
        clearInterval(autoScrollRef.current); // Pausa ao interagir
      });

      // Reinicia o auto-scroll após o usuário parar de interagir
      emblaApi.on("scrollEnd", autoScroll);
    }

    return () => {
      clearInterval(autoScrollRef.current); // Limpa o intervalo ao desmontar
    };
  }, [emblaApi, autoScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {clonedCards.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div
                className="carousel-card"
                onClick={() => window.open(item.url, "_blank")}
                aria-label={`Ver mais sobre ${item.title}`}
              >
                <img
                  src={item.imgPath}
                  alt={item.title}
                  className="carousel-card-image"
                  loading="lazy" // Carregamento otimizado
                />
                <h3 className="carousel-card-title">{item.title}</h3>
                <p className="carousel-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
