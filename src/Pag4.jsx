import React, { useState } from 'react';
import './estilo.css';

function Pag4() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&h=800&fit=crop&q=80',
      title: 'Árbol Iluminado',
      desc: 'La magia de las luces navideñas transformando la noche en un espectáculo inolvidable'
    },
    { 
      img: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1200&h=800&fit=crop&q=80',
      title: 'Espíritu Navideño',
      desc: 'La esencia de la temporada capturada en cada detalle decorativo'
    },
    { 
      img: 'https://images.unsplash.com/photo-1548177810-605d8d0b9e4c?w=1200&h=800&fit=crop&q=80',
      title: 'Invierno Mágico',
      desc: 'La belleza pristina de la nieve creando paisajes de ensueño'
    },
    { 
      img: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&h=800&fit=crop&q=80',
      title: 'Regalos con Amor',
      desc: 'Cada presente envuelto con cariño representa un gesto de afecto sincero'
    },
    { 
      img: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1200&h=800&fit=crop&q=80',
      title: 'Decoración Elegante',
      desc: 'Detalles sofisticados que elevan la atmósfera navideña a otro nivel'
    },
    { 
      img: 'https://images.unsplash.com/photo-1478827536339-2b742b50c3c5?w=1200&h=800&fit=crop&q=80',
      title: 'Paisaje Invernal',
      desc: 'La naturaleza en su esplendor más puro durante la temporada más fría'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="galeria-pro">
      <div className="section-header">
        <h1>Galería Navideña</h1>
        <p>Momentos que capturan la magia de la temporada</p>
      </div>
      
      <div className="carousel-profesional">
        <div className="carousel-main">
          <img 
            src={slides[currentSlide].img} 
            alt={slides[currentSlide].title}
            className="carousel-img-pro"
          />
          <div className="carousel-overlay">
            <div className="carousel-info">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].desc}</p>
              <div className="slide-counter">{currentSlide + 1} / {slides.length}</div>
            </div>
          </div>
        </div>

        <button className="carousel-control prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button className="carousel-control next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="carousel-thumbnails">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="thumbnail-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pag4;