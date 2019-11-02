const exampleMenue = {
  1 : {
    name: "Rindfleisch Menü",
    value: "menue1",
    img: "/images/Menü%203.jpg",
    imgAlt: "",
    ingredients: [1, 2, 3]
  },
  2: {
    name: "Vegetarisch",
    value: "menue2",
    img: "/images/Menü%202.jpg",
    imgAlt: "",
    ingredients: [2,3]
  }
};

export default function(state = exampleMenue, action) {
  return state;
}
