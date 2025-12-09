import React from 'react';
import './estilo.css';

function Pag3() {
  return (
    <div className="tradiciones-pro">
      <div className="section-header">
        <h1>Tradiciones Navideñas</h1>
        <p>Costumbres que unen generaciones y culturas</p>
      </div>

      <div className="timeline">
        <div className="timeline-item izquierda">
          <div className="timeline-content">
            <div className="timeline-icon verde">🎅</div>
            <h3>Papá Noel</h3>
            <p className="timeline-desc">La figura legendaria que representa la generosidad y el espíritu navideño. Basado en San Nicolás de Bari, este personaje viaja por el mundo en su trineo mágico repartiendo alegría y regalos a quienes han mantenido la bondad en sus corazones durante todo el año.</p>
            <div className="timeline-tag">Tradición Universal</div>
          </div>
        </div>

        <div className="timeline-item derecha">
          <div className="timeline-content">
            <div className="timeline-icon rojo">🎵</div>
            <h3>Villancicos</h3>
            <p className="timeline-desc">Las melodías navideñas que llenan de calidez los hogares. Estas canciones tradicionales han pasado de generación en generación, uniendo familias en coros espontáneos y creando una atmósfera de paz y unión que solo la Navidad puede ofrecer.</p>
            <div className="timeline-tag">Música Tradicional</div>
          </div>
        </div>

        <div className="timeline-item izquierda">
          <div className="timeline-content">
            <div className="timeline-icon dorado">🍽️</div>
            <h3>Cena Navideña</h3>
            <p className="timeline-desc">El momento cumbre de la celebración donde las familias se reúnen alrededor de la mesa. La cena del 24 de diciembre es más que comida; es un ritual de amor, gratitud y conexión que fortalece los lazos familiares y crea recuerdos que duran toda la vida.</p>
            <div className="timeline-tag">Celebración Familiar</div>
          </div>
        </div>

        <div className="timeline-item derecha">
          <div className="timeline-content">
            <div className="timeline-icon azul">✉️</div>
            <h3>Cartas a Santa</h3>
            <p className="timeline-desc">La mágica tradición donde los niños expresan sus deseos más profundos. Escribir cartas al Polo Norte mantiene viva la ilusión infantil y enseña valores como la esperanza, la paciencia y la importancia de los sueños en nuestras vidas.</p>
            <div className="timeline-tag">Magia Infantil</div>
          </div>
        </div>
      </div>

      <div className="tradiciones-footer">
        <h3>Cada tradición cuenta una historia</h3>
        <p>Descubre, celebra y crea tus propias tradiciones familiares</p>
      </div>
    </div>
  );
}

export default Pag3;