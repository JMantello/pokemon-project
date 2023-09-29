import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Item from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import { usePokemon } from '../contexts/PokeContext'

export default function PokeCard({ pokemon, add }) {
  const { addToSquad, removeFromSquad } = usePokemon()

  function handleClick() {
    if (add) {
      addToSquad(pokemon)
    } else {
      removeFromSquad(pokemon)
    }
  }

  return (<>
    <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
      <Item>
        <Card >
          <CardMedia
            component="img"
            title={pokemon.name}
            image={pokemon.sprites.front_default}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {pokemon.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" onClick={handleClick}>{add ? "Add" : "Remove"}</Button>
          </CardActions>
        </Card>
      </ Item>
    </Grid>
  </>)
}