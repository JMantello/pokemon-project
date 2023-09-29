import React from 'react'
import PokemonGrid from './PokemonGrid'
import { usePokemon } from '../contexts/PokeContext'

export default function SquadSection() {
  const { squad } = usePokemon()

  return (
    <>
      <h2>My Squad</h2>
      {squad.length ? <PokemonGrid items={squad} />
        : <h3>Empty</h3>}
    </>
  )
}