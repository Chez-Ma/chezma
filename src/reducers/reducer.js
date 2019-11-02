import { combineReducers } from 'redux'
import recipes from "./recipes";

const reducer = combineReducers({
  ingredients,
  menus,
  recipes,

});

export default reducer;