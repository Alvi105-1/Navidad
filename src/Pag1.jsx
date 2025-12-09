import React from 'react';
import './estilo.css';

function Pag1() {
  return (
    <div className="recetas-pro">
      <div className="section-header">
        <h1>Recetas Navideñas</h1>
        <p>Sabores tradicionales que unen a la familia</p>
      </div>

      <div className="recetas-grid">
        <div className="receta-card">
          <div className="receta-imagen" style={{ backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="receta-categoria">Postres</div>
          </div>
          <div className="receta-contenido">
            <h3>Galletas de Jengibre</h3>
            <p className="receta-descripcion">Un clásico navideño con el toque perfecto de especias aromáticas</p>
            <div className="receta-stats">
              <span>⏱️ 45 min</span>
              <span>👥 12 porciones</span>
            </div>
            <div className="ingredientes-lista">
              <h4>Ingredientes principales:</h4>
              <ul>
                <li>Harina de trigo: 3 tazas</li>
                <li>Jengibre molido: 2 cucharaditas</li>
                <li>Canela en polvo: 1 cucharadita</li>
                <li>Azúcar morena: 1 taza</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="receta-card">
          <div className="receta-imagen" style={{ backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <div className="receta-categoria">Bebidas</div>
          </div>
          <div className="receta-contenido">
            <h3>Ponche Navideño</h3>
            <p className="receta-descripcion">Bebida caliente aromática que reconforta el alma en las noches frías</p>
            <div className="receta-stats">
              <span>⏱️ 30 min</span>
              <span>👥 8 porciones</span>
            </div>
            <div className="ingredientes-lista">
              <h4>Ingredientes principales:</h4>
              <ul>
                <li>Frutas mixtas frescas</li>
                <li>Canela en rama</li>
                <li>Piloncillo al gusto</li>
                <li>Agua: 2 litros</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="receta-card">
          <div className="receta-imagen" style={{ backgroundImage: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }}>
            <div className="receta-categoria">Dulces</div>
          </div>
          <div className="receta-contenido">
            <h3>Turrón Casero</h3>
            <p className="receta-descripcion">Dulce tradicional artesanal con almendras tostadas y miel natural</p>
            <div className="receta-stats">
              <span>⏱️ 60 min</span>
              <span>👥 10 porciones</span>
            </div>
            <div className="ingredientes-lista">
              <h4>Ingredientes principales:</h4>
              <ul>
                <li>Almendras peladas: 500g</li>
                <li>Miel pura: 200g</li>
                <li>Claras de huevo: 2 unidades</li>
                <li>Azúcar blanca: 150g</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pag1;