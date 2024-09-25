import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/Carousel.css";

function Carousel({ cards }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handleCardClick = useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  const scaleEmblaSlides = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();

    if (!engine || !engine.slideNodes) return; // Verifica se engine e slideNodes estão disponíveis

    emblaApi.slidesInView(true).forEach((index) => {
      const slide = engine.slideNodes[index];
      const slideScale = 1 - Math.abs(engine.scrollProgress() - index) * 0.5; // Calcula a escala
      if (slide) {
        slide.style.transform = `scale(${slideScale})`;
      }
    });
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", scaleEmblaSlides);
      emblaApi.on("resize", scaleEmblaSlides);
      scaleEmblaSlides(); // Chama a função logo após a inicialização
    }
  }, [emblaApi, scaleEmblaSlides]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {cards.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="carousel-card" onClick={() => handleCardClick(item.url)}>
                <img src={item.imgPath} alt={item.title} className="carousel-card-image" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
