import { DEPOSIT, WITHDRAW, RESET } from "../actionTypes/investment";

const initialState = {
  amount: 0,
  error: "",
};

const investmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT: {
      return {
        ...state,
        amount: state.amount + action.payload,
        error: "",
      };
    }
    case WITHDRAW: {
      if (state.amount <= 0) {
        return {
          ...state,
          error: "Error",
        };
      }

      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }
    case RESET: {
      return {
        ...state,
        amount: 0,
        error: "",
      };
    }
    default: {
      return state;
    }
  }
};

export default investmentReducer;
