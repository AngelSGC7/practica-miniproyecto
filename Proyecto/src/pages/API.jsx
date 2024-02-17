import React, { useEffect } from 'react';


const API = () => {
  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const response = await fetch('http://localhost:3000/peliculas');
        const data = await response.json();
        console.log(data); 
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };

    obtenerPeliculas();
  }, []); 

  return <></>; // llamada a la API
};

export default API//buscar que salga la info