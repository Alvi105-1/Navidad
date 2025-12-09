import React from 'react';
import './estilo.css';

function Pag0() {
  return (
    <div className="inicio-pro">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Feliz Navidad</h1>
          <p className="hero-subtitle">Celebra la magia de la temporada con nosotros</p>
          <div className="hero-line"></div>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card card-rojo">
          <div className="feature-icon">✨</div>
          <h3>Espíritu Navideño</h3>
          <p>Descubre la esencia de la Navidad a través de tradiciones milenarias y celebraciones llenas de significado</p>
          <div className="feature-overlay"></div>
        </div>

        <div className="feature-card card-verde">
          <div className="feature-icon">🎁</div>
          <h3>Regalos con Amor</h3>
          <p>El arte de dar y recibir momentos inolvidables que perduran en el corazón de nuestros seres queridos</p>
          <div className="feature-overlay"></div>
        </div>

        <div className="feature-card card-dorado">
          <div className="feature-icon">🕯️</div>
          <h3>Calidez del Hogar</h3>
          <p>Crea el ambiente perfecto con decoraciones que transforman espacios en experiencias mágicas</p>
          <div className="feature-overlay"></div>
        </div>

        <div className="feature-card card-azul">
          <div className="feature-icon">⭐</div>
          <h3>Momentos Únicos</h3>
          <p>Construye recuerdos inolvidables compartiendo tiempo de calidad con familia y amigos</p>
          <div className="feature-overlay"></div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Una temporada para recordar</h2>
        <p>Explora nuestras secciones y descubre todo lo que la Navidad tiene para ofrecer</p>
      </div>
    </div>
  );
}

export default Pag0;