import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Information from '../pages/Information'
import API from '../pages/API'



const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Information' element={<Information />} />
        <Route path='API' element={<API />} />
    </Routes>
  )
}

export default RoutesIndex