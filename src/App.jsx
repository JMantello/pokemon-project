import SearchAppBar from './components/SearchAppBar'
import SquadSection from './components/SquadSection'
import PokemonSelection from './components/PokemonSelection'

function App() {
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
