import React, {Component} from 'react';

const calories = 731.35;
const carbohydrates = 12.23;
const fat = 7.7;
const protein = 7.7;
const calcium = 5.4;
const vitaminB12 = 1.4;
const vitaminD = 2.32;

class NutritionalValue extends Component {
    render() {
        return (
            <div>
                <h4>Nutritional values</h4>
                <div>Calories: {calories}</div>
                <div>Carbohydrates: {carbohydrates}</div>
                <div>Fat: {fat}</div>
                <div>Protein: {protein}</div>
                <div>Calcium: {calcium}</div>
                <div>Vitamin B12: {vitaminB12}</div>
                <div>Vitamin D: {vitaminD}</div>
            </div>
        );
    }
}

export default NutritionalValue;