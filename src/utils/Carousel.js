import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/Carousel.css";

const EmblaCarousel = ({ cards }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Loop ativado
    speed: 6, // Velocidade suave de transição
    containScroll: "trimSnaps", // Limita o scroll a snaps precisos
  });

  const autoScrollRef = useRef(null);

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;

    autoScrollRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext(); // Vai para o próximo slide
      }
    }, 4000); // Intervalo de 4 segundos para a rotação automática
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      autoScroll(); // Inicia o auto-scroll quando o emblaApi é inicializado
    }
    return () => {
      clearInterval(autoScrollRef.current); // Limpa o intervalo ao desmontar
    };
  }, [emblaApi, autoScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {cards.map((item, index) => (
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
