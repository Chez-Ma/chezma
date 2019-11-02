const recipes = [
  {
    name: "Gulasch",
    id: 12345,
    ingredients: [
      {id: 345, weight: 50},
      {id: 567, weight: 100},
      {id: 7689, weight: 100}
    ]
  },
  {
    name: "Potatos",
    id: 456456,
    ingredients: [
      {id: 456456, weight: 200}
    ]
  }
];

export default function(state = recipes, action) {
  return state;
}
