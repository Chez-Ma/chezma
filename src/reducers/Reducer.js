import { combineReducers } from 'redux'
import recipes from "./recipes";
import ingredients from "./ingredients";
import menus from "./menus";

const reducer = combineReducers({
  ingredients,
  menus,
  recipes,

});

export default reducer;