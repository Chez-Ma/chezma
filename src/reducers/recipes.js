const recipes = {
    1: {
        id: "goulash",
        name: "Gulasch",
        img: "/images/GulaschSeiteGlas.jpg",
        icon: "/images/meat_ikon.png",
        imgAlt: "a gulasch",
        ingredients: [
            {id: 1076, weight: 80},
            {id: 368, weight: 10},
            {id: 1017, weight: 40},
            {id: 1027, weight: 25},
            {id: 1015, weight: 5},
            {id: 668, weight: 5},
            {id: 591, weight: 4.5},
            {id: 1693, weight: 3},
            {id: 663, weight: 2},
            {id: 664, weight: 3},
            {id: 9991, weight: 4},
            {id: 9992, weight: 2}
        ]
    },
    2: {
        id: "spaetzle",
        name: "Spätzli",
        icon: "/images/wheat_ikon.png",
        img: "/images/spaezli_1.jpg",
        imgAlt: "a spaetzli",
        ingredients: [
            {id: 734, weight: 104},
            {id: 423, weight: 26},
            {id: 290, weight: 46.5},
            {id: 62, weight: 39},
            {id: 10457, weight: 2.6},
            {id: 888989, weight: 1}]
    },
    3: {
        id: "broccoli",
        name: "Brokkoli im Glas",
        img: "/images/Brokkoli.jpg",
        icon: "/images/broccoli_ikon.png",
        imgAlt: "a brokkoli",
        ingredients: [
            {id: 1005, weight: 150},
            {id: 10457, weight: 2}
        ]
    },
    4: {
        id: "pouletgeschnetzeltes",
        name: "Poulet Geschnetzeltes",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
    5: {
        id: "hackbraten",
        name: "Hackbraten",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
    6: {
        id: "schweinerouladen",
        name: "Schweinerouladen",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
    7: {
        id: "ratatouille",
        name: "Ratatouille",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
    8: {
        id: "bohnen",
        name: "Bohnen",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
    9: {
        id: "fenchel",
        name: "Fenchel",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
    10: {
        id: "risotto",
        name: "Risotto",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
    11: {
        id: "fruehlingskartoffeln",
        name: "Frühlingskartoffeln",
        img: "https://cataas.com/cat/6",
        ingredients: []
    },
};


export default function (state = recipes, action) {
    return state;
}
