export const SELECT_RECIPE = 'SELECT_RECIPE';
export function selectRecipe(id){
  return {
    type: SELECT_RECIPE,
    id: id
  }
}

export const UNSELECT_RECIPE = 'UNSELECT_RECIPE';
export function unselectRecipe(id){
  return {
    type: UNSELECT_RECIPE,
    id: id
  }
}

export const CLEAR_SELECTED_RECIPES = 'CLEAR_SELECTED_RECIPES';
export function clearSelectedRecipes(){
  return {
    type: CLEAR_SELECTED_RECIPES,
  }
}
