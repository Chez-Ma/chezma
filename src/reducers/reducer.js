import { combineReducers } from 'redux'
import recipes from "./recipes";
import recipeGroups from "./recipeGroups";
import menus from "./menus";
import ingredients from "./ingredients";
import selectedRecipes from "./selectedRecipes";

const reducer = combineReducers({
  ingredients,
  menus,
  recipes,
  recipeGroups,
  selectedRecipes
});

export default reducer;