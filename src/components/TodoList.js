import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@mui/material/Grid";

import { fetchTodos } from "../actions/todos";

const TodoList = () => {
  const { data, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={3}>
      {data.map(({ title, id }) => (
        <Grid item key={id} xs={6}>
          {title}
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
