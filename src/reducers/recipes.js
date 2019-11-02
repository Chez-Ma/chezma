const recipes = {
  12345: {
    name: "Gulasch",
    ingredients: [
      {id: 345, weight: 50},
      {id: 567, weight: 100},
      {id: 7689, weight: 100}
    ]
  },
  456456: {
    name: "Potatos",
    ingredients: [
      {id: 456456, weight: 200}
    ]
  }
};

export default function(state = recipes, action) {
  return state;
}
