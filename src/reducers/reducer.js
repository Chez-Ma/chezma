import { combineReducers } from 'redux'
import recipes from "./recipes";
import recipeGroups from "./recipeGroups";
import menus from "./menus";
import ingredients from "./ingredients";

const reducer = combineReducers({
  ingredients,
  menus,
  recipes,
  recipeGroups,

});

export default reducer;