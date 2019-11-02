const exampleMenue = [
  {
    name: "Rindsfleisch Menü",
    value: "rindfleischMenue",
    img: "/images/Menü%201.jpg",
    imgAlt: "",
    recipes: [12345, 4325456, 23423423]
  },
  {
    name: "Spätzle",
    value: "spaetzle",
    img: "/images/Menü%202.jpg",
    imgAlt: "",
    recipes: [12345, 4325456, 23423423]
  },
  {
    name: "Kein Gulasch",
    value: "menue2",
    img: "/images/Menü%203.jpg",
    imgAlt: "",
    recipes: [12345, 456456]
  }];

export default function(state = exampleMenue, action) {
  return state;
}
