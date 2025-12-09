import React from 'react';
import './estilo.css';

function Pag2() {
  return (
    <div className="decoraciones-pro">
      <div className="section-header">
        <h1>Decoraciones Navideñas</h1>
        <p>Transforma tu hogar en un paraíso invernal</p>
      </div>

      <div className="deco-container">
        <div className="deco-principal">
          <div className="deco-card-large">
            <div className="deco-badge">Esencial</div>
            <h2>Árbol de Navidad</h2>
            <p className="deco-lead">El corazón de la decoración navideña, un símbolo de vida y esperanza</p>
            
            <div className="deco-tips">
              <div className="tip-item">
                <span className="tip-number">01</span>
                <div className="tip-content">
                  <h4>Iluminación</h4>
                  <p>Utiliza luces LED blancas cálidas o multicolores según tu estilo</p>
                </div>
              </div>
              
              <div className="tip-item">
                <span className="tip-number">02</span>
                <div className="tip-content">
                  <h4>Esferas</h4>
                  <p>Combina diferentes tamaños y texturas para crear profundidad visual</p>
                </div>
              </div>
              
              <div className="tip-item">
                <span className="tip-number">03</span>
                <div className="tip-content">
                  <h4>Corona</h4>
                  <p>Remata con una estrella o ángel que represente tus valores</p>
                </div>
              </div>
              
              <div className="tip-item">
                <span className="tip-number">04</span>
                <div className="tip-content">
                  <h4>Guirnaldas</h4>
                  <p>Añade cintas plateadas o doradas para un toque elegante</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="deco-secundaria">
          <div className="deco-card-small verde">
            <h3>Corona Navideña</h3>
            <p>Dale la bienvenida a tus invitados con estilo</p>
            <ul className="deco-lista">
              <li>Base natural de pino o eucalipto</li>
              <li>Piñas pintadas en dorado</li>
              <li>Lazos de terciopelo rojo</li>
              <li>Esferas miniatura decorativas</li>
            </ul>
          </div>

          <div className="deco-card-small rojo">
            <h3>Ambiente Acogedor</h3>
            <p>Detalles que marcan la diferencia</p>
            <ul className="deco-lista">
              <li>Velas aromáticas de canela</li>
              <li>Calcetines personalizados</li>
              <li>Luces en ventanas</li>
              <li>Mantas navideñas</li>
            </ul>
          </div>

          <div className="deco-card-small dorado">
            <h3>Mesa Festiva</h3>
            <p>Crea experiencias memorables</p>
            <ul className="deco-lista">
              <li>Centro de mesa con velas</li>
              <li>Vajilla temática elegante</li>
              <li>Servilletas de tela fina</li>
              <li>Marcadores de lugar personalizados</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pag2;