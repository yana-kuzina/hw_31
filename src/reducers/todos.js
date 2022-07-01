import { LOADING, RECEIVED, FAILED } from "../actionTypes/todos";

const initialState = {
  data: [],
  isLoading: true,
  error: "",
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RECEIVED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default todosReducer;
