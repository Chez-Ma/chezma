const recipeGroups = [{
  name: "Fleisch",
  recipes: [1],
},
  {
  name: "Beilagen",
  recipes: [2],
},
  {
  name: "Gemüse",
  recipes: [3]
}];

export default function(state = recipeGroups, action) {
  return state;
}
