import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState(null)

  const fetchPokemonData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const pokemonData = await response.json();
      setPokemon(pokemonData)
      console.log(pokemonData)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])

  function pokemonCard(pokemonObject) {
    return (<>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image=""
          title={pokemonObject.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemonObject.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>)
  }

  function defaultPage() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }

  return (
    <>
      {pokemon.map((p) => (
        pokemonCard(p)
      ))}
    </>
  )
}

export default App
