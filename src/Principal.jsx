import React, { useState, useEffect } from 'react';
import Pag0 from './Pag0';
import Pag1 from './Pag1';
import Pag2 from './Pag2';
import Pag3 from './Pag3';
import Pag4 from './Pag4';
import './estilo.css';

function Principal() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [konamiCode, setKonamiCode] = useState([]);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [snowflakes, setSnowflakes] = useState([]);
  const [santaFlying, setSantaFlying] = useState(false);
  
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newCode = [...konamiCode, e.key].slice(-10);
      setKonamiCode(newCode);
      
      if (JSON.stringify(newCode) === JSON.stringify(konami)) {
        activateEasterEgg();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode]);

  const activateEasterEgg = () => {
    setEasterEggActive(true);
    setSantaFlying(true);
    
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setSnowflakes(flakes);

    setTimeout(() => {
      alert('HO HO HO! Has desbloqueado el Modo Navidad Extremo!');
    }, 1000);

    setTimeout(() => {
      setSantaFlying(false);
    }, 5000);
  };

  const clickSecretButton = () => {
    const responses = [
      "Creias que era asi de facil? Intenta el codigo Konami! Arriba Arriba Abajo Abajo Izq Der Izq Der BA",
      "Pista: Los gamers de los 80s saben...",
      "Konami que? Google es tu amigo...",
      "Casi! Usa las flechas del teclado...",
      "Arriba, arriba, abajo, abajo... te suena?"
    ];
    alert(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <div className={`padre ${easterEggActive ? 'easter-egg-active' : ''}`}>
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`
          }}
        >
          *
        </div>
      ))}

      {santaFlying && (
        <div className="flying-santa">
          SANTA
        </div>
      )}

      <nav>
        <ul>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('inicio'); }}>
              Navidad Magica
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('recetas'); }}>
              Recetas
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('decoraciones'); }}>
              Decoraciones
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('tradiciones'); }}>
              Tradiciones
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('galeria'); }}>
              Galeria
            </a>
          </li>
        </ul>
      </nav>

      <button 
        className="secret-button" 
        onClick={clickSecretButton}
        title="?"
      >
        ?
      </button>

      <main className="container py-5">
        {currentPage === 'inicio' && <Pag0 />}
        {currentPage === 'recetas' && <Pag1 />}
        {currentPage === 'decoraciones' && <Pag2 />}
        {currentPage === 'tradiciones' && <Pag3 />}
        {currentPage === 'galeria' && <Pag4 />}
      </main>

      <footer>
        <p>Felices Fiestas!</p>
        <p>Que la magia de la Navidad llene tu hogar de amor y alegria</p>
      </footer>
    </div>
  );
}

export default Principal;