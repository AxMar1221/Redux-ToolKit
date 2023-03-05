import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);
  const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoad } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId( todoId + 1 );
  }
  const prevTodo = () => {
    if ( todoId === 1 ) return;
    setTodoId( todoId - 1 );
  }

  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography align="center" variant="h2" color="primary">
            Todos - RTK Query
            <hr />
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">
            Loading: {isLoad ? "True" : "False"}
          </Typography>
        <Typography>{ JSON.stringify( todo )}</Typography>

        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={ prevTodo }
          >
            Prev Todo
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={ nextTodo }
          >
            Next Todo
          </Button>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
        <Typography variant="h4">
            Loading: {isLoading ? "True" : "False"}
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableBody>
                {todos.map((todo) => (
                  <TableRow
                    key={todo.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Typography>
                        {" "}
                        {todo.completed ? "Done" : "Pending"}{" "}
                      </Typography>
                      {todo.title}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
