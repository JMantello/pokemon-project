import React from 'react';
import PokeCard from './PokeCard';
import Grid from '@mui/material/Grid';

export default function PokemonGrid({ items, add }) {
  return (<>
    <Grid container spacing={2} className='pokemon-grid'>
      {items.map((pokemon) => {
        console.log(pokemon)
        return <PokeCard
          key={pokemon.id}
          pokemon={pokemon}
          add={add}
        />
      })}
    </Grid>
  </>)
}