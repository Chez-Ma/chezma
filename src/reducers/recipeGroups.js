const recipeGroups = [{
  name: "Fleisch",
  recipes: [1, 4, 5, 6],
},
  {
  name: "Beilagen",
  recipes: [2, 10, 11],
},
  {
    name: "Gemüse",
    recipes: [3,7,8,9]
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
