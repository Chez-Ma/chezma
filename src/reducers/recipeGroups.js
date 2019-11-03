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
  },
  {
    name: "Fisch",
    recipes: [],
  },
  {
    name: "Vegan",
    recipes: [],
  },
  {
    name: "Vegetarisch",
    recipes: [],
  },
  {
    name: "Suppen",
    recipes: []
  }
  ,
  {
    name: "Saucen",
    recipes: []
  }
  ,
  {
    name: "Salat",
    recipes: []
  }
  ,
  {
    name: "Dessert",
    recipes: []
  }];

export default function(state = recipeGroups, action) {
  return state;
}
