import { combineReducers } from "redux";
import Player1Reducer from "./Player1";
import Player2Reducer from "./Player2";
import usersReducer from "./users";

const reducer = combineReducers({
  playerone: Player1Reducer,
  playertwo: Player2Reducer,
  usersData: usersReducer,
});

export default reducer;
