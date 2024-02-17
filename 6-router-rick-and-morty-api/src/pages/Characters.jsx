import { useEffect } from 'react'
import { getAllCharacters } from '../services/characterServices'

const Characters = () => {
  
  const getCharactersData = async () => {
    try {
      const characters = await getAllCharacters()
      console.log(characters)
    } catch (error) {
      console.log('Paso un error', error)
    }
  }

  useEffect(() => {
    getCharactersData()
  }, [])

  return (
    <div>Characters</div>
  )
}

export default Characters