import {CLEAR_SELECTED_RECIPES, SELECT_RECIPE, UNSELECT_RECIPE} from "../actions/selectRecipe";

export default function(state = [], action) {
  switch(action.type){
    case SELECT_RECIPE:
      return [...state, action.id];
    case UNSELECT_RECIPE:
      return state.filter( val => val !== action.id );
    case CLEAR_SELECTED_RECIPES:
      return [];
    default:
      return state;
  }
}
