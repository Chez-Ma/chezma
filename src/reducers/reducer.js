import { combineReducers } from 'redux'
import recipes from "./recipes";
import menus from "./menus";
import ingredients from "./ingredients";

const reducer = combineReducers({
  ingredients,
  menus,
  recipes,

});

export default reducer;