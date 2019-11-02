import { combineReducers } from 'redux'
import recipes from "./recipes";
import recipeGroups from "./recipeGroups";
import menus from "./menus";
import ingredients from "./ingredients";
import selectedRecipes from "./selectedRecipes";
import profile from "./profile";

const reducer = combineReducers({
  ingredients,
  menus,
  recipes,
  recipeGroups,
  selectedRecipes,
  profile
});

export default reducer;