const dailyConsumptionRecommendation = {
    energy: {
        id: "energy",
        name: "Energiezufuhr",
        ranges : {
            range : [
                {
                    fromAge: 1,
                    toAge: 4,
                    male: 1300,
                    female: 1200
                },
                {
                    fromAge: 4,
                    toAge: 7,
                    male: 1600,
                    female: 1500
                },
                {
                    fromAge: 7,
                    toAge: 10,
                    male: 1900,
                    female: 1800
                },
                {
                    fromAge: 10,
                    toAge: 13,
                    male: 2200,
                    female: 2000
                },
                {
                    fromAge: 13,
                    toAge: 15,
                    male: 2600,
                    female: 2200
                },
                {
                    fromAge: 15,
                    toAge: 19,
                    male: 3000,
                    female: 2300
                },
                {
                    fromAge: 19,
                    toAge: 25,
                    male: 2800,
                    female: 2200
                },
                {
                    fromAge: 25,
                    toAge: 51,
                    male: 2700,
                    female: 2100
                },
                {
                    fromAge: 51,
                    toAge: 65,
                    male: 2500,
                    female: 2000
                },
                {
                    fromAge: 65,
                    toAge: 120,
                    male: 2500,
                    female: 1900
                },
            ]
        }
    },
};


export default function (state = dailyConsumptionRecommendation, action) {
    return state;
}
