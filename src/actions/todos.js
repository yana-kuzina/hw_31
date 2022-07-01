import { LOADING, RECEIVED, FAILED } from "../actionTypes/todos";

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    dispatch({ type: RECEIVED, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error.toString() });
  }
};
