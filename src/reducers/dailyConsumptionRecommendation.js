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
    protein: {
        id: "protein",
        name: "Eiweiss",
        ranges : {
            range : [
                {
                    fromAge: 1,
                    toAge: 4,
                    male: 1.0,
                    female: 1.0
                },
                {
                    fromAge: 4,
                    toAge: 7,
                    male: 0.9,
                    female: 0.9
                },
                {
                    fromAge: 7,
                    toAge: 10,
                    male: 0.9,
                    female: 0.9
                },
                {
                    fromAge: 10,
                    toAge: 13,
                    male: 0.9,
                    female: 0.9
                },
                {
                    fromAge: 13,
                    toAge: 15,
                    male: 0.9,
                    female: 0.9
                },
                {
                    fromAge: 15,
                    toAge: 19,
                    male: 0.9,
                    female: 0.8
                },
                {
                    fromAge: 19,
                    toAge: 25,
                    male: 0.8,
                    female: 0.8
                },
                {
                    fromAge: 25,
                    toAge: 51,
                    male: 0.8,
                    female: 0.8
                },
                {
                    fromAge: 51,
                    toAge: 65,
                    male: 0.8,
                    female: 0.8
                },
                {
                    fromAge: 65,
                    toAge: 120,
                    male: 1.0,
                    female: 1.0
                },
            ]
        }
    },
    vitaminD: {
        id: "vitamind",
        name: "Vitamin D",
        ranges : {
            range : [
                {
                    fromAge: 0,
                    toAge: 1,
                    male: 10,
                    female: 10
                },
                {
                    fromAge: 1,
                    toAge: 15,
                    male: 20,
                    female: 20
                },
                {
                    fromAge: 15,
                    toAge: 65,
                    male: 20,
                    female: 20
                },
                {
                    fromAge: 65,
                    toAge: 120,
                    male: 20,
                    female: 20
                },
                
            ]
        }
    },
    fat: {
        id: "fat",
        name: "Fett",
        ranges : {
            range : [
                {
                    fromAge: 1,
                    toAge: 4,
                    male: 30-40,
                    female: 30-40
                },
                {
                    fromAge: 4,
                    toAge: 7,
                    male: 30-35,
                    female: 30-35
                },
                {
                    fromAge: 7,
                    toAge: 10,
                    male: 30-35,
                    female: 30-35
                },
                {
                    fromAge: 10,
                    toAge: 13,
                    male: 30-35,
                    female: 30-35
                },
                {
                    fromAge: 13,
                    toAge: 15,
                    male: 30-35,
                    female: 30-35
                },
                {
                    fromAge: 15,
                    toAge: 19,
                    male: 30,
                    female: 30
                },
                {
                    fromAge: 19,
                    toAge: 25,
                    male: 30,
                    female: 30
                },
                {
                    fromAge: 25,
                    toAge: 51,
                    male: 30,
                    female: 30
                },
                {
                    fromAge: 51,
                    toAge: 65,
                    male: 30,
                    female: 30
                },
                {
                    fromAge: 65,
                    toAge: 120,
                    male: 30,
                    female: 30
                },
            ]
        }
    },
    vitaminB12: {
        id: "vitaminb12",
        name: "Vitamin B12",
        ranges : {
            range : [
           
             
{
                    fromAge: 1,
                    toAge: 4,
                    male: 1.5,
                    female: 1.5
                },
                {
                    fromAge: 4,
                    toAge: 7,
                    male: 2,
                    female: 2
                },
                {
                    fromAge: 7,
                    toAge: 10,
                    male: 2.5,
                    female: 2.5
                },
                {
                    fromAge: 10,
                    toAge: 13,
                    male: 3.5,
                    female: 3.5
                },
                {
                    fromAge: 13,
                    toAge: 15,
                    male: 4.0,
                    female: 4.0
                },
                {
                    fromAge: 15,
                    toAge: 19,
                    male: 4.0,
                    female: 4.0
                },
                {
                    fromAge: 19,
                    toAge: 25,
                    male: 4.0,
                    female: 4.0
                },
                {
                    fromAge: 25,
                    toAge: 51,
                    male: 4.0,
                    female: 4.0
                },
                {
                    fromAge: 51,
                    toAge: 65,
                    male: 4.0,
                    female: 30
                },
                {
                    fromAge: 65,
                    toAge: 120,
                    male: 4.0,
                    female: 4.0
                },
            ]
        }
    },
    calcium: {
        id: "Calcium",
        name: "Calcium",
        ranges : {
            range : [
           
             
{
                    fromAge: 1,
                    toAge: 4,
                    male: 600,
                    female: 600
                },
                {
                    fromAge: 4,
                    toAge: 7,
                    male: 750,
                    female: 750
                },
                {
                    fromAge: 7,
                    toAge: 10,
                    male: 900,
                    female: 900
                },
                {
                    fromAge: 10,
                    toAge: 13,
                    male: 1100,
                    female: 1100
                },
                {
                    fromAge: 13,
                    toAge: 15,
                    male: 1200,
                    female: 1200
                },
                {
                    fromAge: 15,
                    toAge: 19,
                    male: 1200,
                    female: 1200
                },
                {
                    fromAge: 19,
                    toAge: 25,
                    male: 1000,
                    female: 1000
                },
                {
                    fromAge: 25,
                    toAge: 51,
                    male: 1000,
                    female: 1000
                },
                {
                    fromAge: 51,
                    toAge: 65,
                    male: 1000,
                    female: 1000
                },
                {
                    fromAge: 65,
                    toAge: 120,
                    male: 1000,
                    female: 1000
                },
            ]
        }
    },
};


export default function (state = dailyConsumptionRecommendation, action) {
    return state;
}
