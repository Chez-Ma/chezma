const exampleMenue = {
  1 : {
    name: "Rindfleisch-Menü",
    value: "menue1",
    img: "/images/menuKlassischesFleisch2.jpg",
    imgAlt: "",
    recipes: [1, 2, 3]
  },
  2: {
    name: "Vegetarisch",
    value: "menue2",
    img: "/images/menuSpaetzliUndGulasch.jpg",
    imgAlt: "",
    recipes: [2,3]
  }
};

export default function(state = exampleMenue, action) {
  return state;
}
