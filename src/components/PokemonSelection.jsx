import React from 'react'
import PokemonGrid from './PokemonGrid'
import { usePokemon } from '../contexts/PokeContext'

export default function PokemonSelection() {
  const { allPokemon } = usePokemon()

  return (
    <>
      <h2>All Pokemon</h2>
      {allPokemon.length ? <PokemonGrid items={allPokemon} add />
        : <h3>Loading...</h3>}
    </>
  )
}