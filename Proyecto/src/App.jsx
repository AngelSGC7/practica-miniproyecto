import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Header from './components/Header'
function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
      <RoutesIndex />
    </BrowserRouter>
    </>
  )
}

export default App