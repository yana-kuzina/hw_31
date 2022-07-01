import { combineReducers } from "redux";

import investment from "./investment";
import todos from "./todos";

const rootReducer = combineReducers({ investment, todos });

export default rootReducer;
