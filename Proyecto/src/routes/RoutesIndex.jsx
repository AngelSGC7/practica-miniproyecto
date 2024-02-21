import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Information from '../pages/Information'
import API from '../pages/API'
import Pelicula1 from '../pages/peliculas-detalles/pelicula1'
import Pelicula2 from '../pages/peliculas-detalles/pelicula2'
import Pelicula3 from '../pages/peliculas-detalles/pelicula3'
import Pelicula4 from '../pages/peliculas-detalles/pelicula4'
import Pelicula5 from '../pages/peliculas-detalles/pelicula5'
import Pelicula6 from '../pages/peliculas-detalles/pelicula6'
import Error404 from '../pages/Error404'


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Information' element={<Information />} />
      <Route path='/API' element={<API />} />
      <Route path="/pelicula/1" element={<Pelicula1 />} />
      <Route path="/pelicula/2" element={<Pelicula2 />} />
      <Route path="/pelicula/3" element={<Pelicula3 />} />
      <Route path="/pelicula/4" element={<Pelicula4 />} />
      <Route path="/pelicula/5" element={<Pelicula5 />} />
      <Route path="/pelicula/6" element={<Pelicula6 />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};

export default RoutesIndex