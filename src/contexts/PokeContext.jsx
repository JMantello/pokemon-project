import React, { useContext, useEffect, useState } from "react"

const PokeContext = React.createContext()

export function usePokemon() {
  return useContext(PokeContext)
}

export const PokeProvider = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState([])
  const [squad, setSquad] = useState([])

  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const json = await res.json()
      const data = json.results
      const pokemon = await Promise.all(data.map(async (p) => {
        const pokemonRecord = await fetchSinglePokemon(p.url)
        return pokemonRecord
      }))
      setAllPokemon(pokemon)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchSinglePokemon = async (url) => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      return json
    } catch (e) {
      console.log(e)
    }
  }

  function addToSquad(pokemon) {
    setSquad([...squad, pokemon])
  }

  function removeFromSquad(pokemon) {
    setSquad(squad.filter((p) => p.id !== pokemon.id))
  }

  return <PokeContext.Provider value={{
    allPokemon,
    squad,
    addToSquad,
    removeFromSquad,
    fetchPokemon,
  }} >
    {children}
  </PokeContext.Provider>
}