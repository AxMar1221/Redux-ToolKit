import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <Grid container>
        <Grid>
          <Typography align="center" variant="h2" color="error">
            Pokemon App
          </Typography>
          <hr />
          <Typography align="left" variant="h5" color="error">
            Loading: {isLoading ? "True" : "False"}
          </Typography>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
            <TableBody>
              {pokemons.map(({ name }) => (
                <TableRow
                  key={name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid
          container
          direction="row"
          justifyContent="flex-star"
          alignItems="flex-star"
        >
          <Button
            variant="contained"
            color="error"
            disabled={isLoading}
            onClick={() => dispatch(getPokemons(page))}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
