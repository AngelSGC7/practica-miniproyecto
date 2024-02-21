import React, { useEffect, useState } from 'react';
import PeliculasList from '../components/PeliculasList';
import PeliculasCard from '../components/PeliculasCard';

const API = () => {
  const [ peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const response = await fetch('http://localhost:3000/peliculas');
        const data = await response.json();
        setPeliculas(data);
      } catch (error) {
        console.error('paso un error :v:', error);
      }
    };

    obtenerPeliculas();
  }, []);


  return (
    <div className="bg-body-tertiary">
      <h2 className='text-center'>Peliculas</h2> 
    
    <PeliculasList>
      {peliculas.map((pelicula) => (
      <PeliculasCard
        key={pelicula.id}
        titulo={pelicula.titulo}
        img={pelicula.img}
        id={pelicula.id}
        genero={pelicula.genero}
      />
      ))}
    </PeliculasList>
    </div>
  );
};

export default API;