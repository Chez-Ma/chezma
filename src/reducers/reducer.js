import { combineReducers } from 'redux'
import recipes from "./recipes";
import recipeGroups from "./recipeGroups";
import menus from "./menus";
import ingredients from "./ingredients";
import selectedRecipes from "./selectedRecipes";
import profile from "./profile";
import dailyConsumptionRecommendation from "./dailyConsumptionRecommendation";

const reducer = combineReducers({
  ingredients,
  menus,
  recipes,
  recipeGroups,
  selectedRecipes,
  profile,
  dailyConsumptionRecommendation
});

export default reducer;