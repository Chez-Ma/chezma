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
    name: "Auch Rind",
    value: "menue2",
    img: "/images/menuSpaetzliUndGulasch.jpg",
    imgAlt: "",
    recipes: [2,3]
  }
  ,
  4: {
    name: "Rind in Sauce",
    value: "menue3",
    img: "/images/GulaschSeiteGlas.jpg",
    imgAlt: "",
    recipes: [2,3]
  }
  ,
  5: {
    name: "Fleisch Menu",
    value: "menue2",
    img: "/images/menuKlassischesFleisch3.jpg",
    imgAlt: "",
    recipes: [2,3]
  }
  ,
  6: {
    name: "Einfach nur Brokkoli",
    value: "menue2",
    img: "/images/Brokkoli.jpg",
    imgAlt: "",
    recipes: [2,3]
  }
};

export default function(state = exampleMenue, action) {
  return state;
}
