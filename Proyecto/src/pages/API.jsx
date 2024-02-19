import React, { useEffect, useState } from 'react';

const API = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const response = await fetch('http://localhost:3000/peliculas');
        const data = await response.json();
        setPeliculas(data);
      } catch (error) {
        console.error('Hubo un error al obtener los datos');
      }
    };

    obtenerPeliculas();
  }, []);


  return (
    <div className="peliculas">
      <h2>Películas</h2>
      <div className="peliculas-container">
        {peliculas.map(pelicula => (
          <div key={pelicula.id} className="pelicula-text">
            <h3>{pelicula.titulo}</h3>
            <img src={pelicula.img}/>
            <p>Genero: {pelicula.genero}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default API;