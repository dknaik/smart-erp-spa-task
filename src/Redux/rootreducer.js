import { combineReducers } from "redux";
import reducer from "./reducer/reducer"
import searchReducer from "./reducer/searchReducer";
const rootReducer = combineReducers({
  reducer,
  searchReducer
  
});

export default rootReducer