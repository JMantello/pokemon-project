import React from 'react';
import PokeCard from './PokeCard';
import Grid from '@mui/material/Grid';

export default function PokemonGrid({ items, add }) {
  console.log('PokemonGrid ', add)
  return (<>
    <Grid container spacing={2} className='pokemon-grid'>
      {items.map((pokemon) => {
        return <PokeCard
          key={pokemon.id}
          pokemon={pokemon}
          add={add}
        />
      })}
    </Grid>
  </>)
}