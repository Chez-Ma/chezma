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
  ,
  3: {
    name: "Vegetarisch",
    value: "menue2",
    img: "/images/menuKlassischesFleisch3.jpg",
    imgAlt: "",
    recipes: [2,3]
  }
  ,
  4: {
    name: "Rind in Sosse",
    value: "menue3",
    img: "/images/GulaschSeiteGlas.jpg",
    imgAlt: "",
    recipes: [2,3]
  }
  ,
  5: {
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
