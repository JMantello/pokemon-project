import SearchAppBar from './components/SearchAppBar'
import SquadSection from './components/SquadSection'
import PokemonSelection from './components/PokemonSelection'
import { useEffect } from 'react'
import { usePokemon } from './contexts/PokeContext'

function App() {
  console.log('App')
  const { fetchPokemon } = usePokemon()

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <>
      <SearchAppBar />
      <section className='padding center'>
        <SquadSection />
        <PokemonSelection />
      </section>
    </>
  )
}

export default App
