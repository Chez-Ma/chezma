import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

function mapStateToProps(state, otherProps) {

    return {
        usedIngredients: otherProps.ingredients.map((ingredient) => {
            return state.ingredients.find(function(element) {
                return ingredient.id === element.id;
            });
            return null;
        })
    };
}

const digits = 2;

class NutritionalValue extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        function HasNoNutritionalValues(ingredient) {
            return  ingredient === undefined
            || ingredient === null
                || ingredient.nutritionalValues === undefined
                || ingredient.nutritionalValues === null;
        };

        function GetCalories(total, ingredient) {
            if (HasNoNutritionalValues(ingredient)
                || ingredient.nutritionalValues.calories === undefined || ingredient.nutritionalValues.calories === null) {
                return 0;
            }
            total += ingredient.nutritionalValues.calories;
            return total;
        };

        // I know this is a lot of copy paste, but it is basel hack, so ...

        function GetCarbohydrates(total, ingredient) {
            if (HasNoNutritionalValues(ingredient)
                || ingredient.nutritionalValues.carbohydrates === undefined || ingredient.nutritionalValues.carbohydrates === null) {
                return 0;
            }
            total += ingredient.nutritionalValues.carbohydrates;
            return total;
        };

        function GetFat(total, ingredient) {
            if (HasNoNutritionalValues(ingredient)
                || ingredient.nutritionalValues.fat === undefined || ingredient.nutritionalValues.fat === null) {
                return 0;
            }
            total += ingredient.nutritionalValues.fat;
            return total;
        };

        function GetProtein(total, ingredient) {
            if (HasNoNutritionalValues(ingredient)
                || ingredient.nutritionalValues.protein === undefined || ingredient.nutritionalValues.protein === null) {
                return 0;
            }
            total += ingredient.nutritionalValues.protein;
            return total;
        };

        function GetCalcium(total, ingredient) {
            if (HasNoNutritionalValues(ingredient)
                || ingredient.nutritionalValues.calcium === undefined || ingredient.nutritionalValues.calcium === null) {
                return 0;
            }
            total += ingredient.nutritionalValues.calcium;
            return total;
        };

        function GetVitaminB12(total, ingredient) {
            if (HasNoNutritionalValues(ingredient)
                || ingredient.nutritionalValues.vitaminB12 === undefined || ingredient.nutritionalValues.vitaminB12 === null) {
                return 0;
            }
            total += ingredient.nutritionalValues.vitaminB12;
            return total;
        };

        function GetVitaminD(total, ingredient) {
            if (HasNoNutritionalValues(ingredient)
                || ingredient.nutritionalValues.vitaminD === undefined || ingredient.nutritionalValues.vitaminD === null) {
                return 0;
            }
            total += ingredient.nutritionalValues.vitaminD;
            return total;
        };

        return (
            <div>
                <h4>Nutritional values</h4>
                <div>Calories: {this.props.usedIngredients.reduce(GetCalories, 0).toFixed(digits)}</div>
                <div>Carbohydrates: {this.props.usedIngredients.reduce(GetCarbohydrates, 0).toFixed(digits)}</div>
                <div>Fat: {this.props.usedIngredients.reduce(GetFat, 0).toFixed(digits)}</div>
                <div>Protein: {this.props.usedIngredients.reduce(GetProtein, 0).toFixed(digits)}</div>
                <div>Calcium: {this.props.usedIngredients.reduce(GetCalcium, 0).toFixed(digits)}</div>
                <div>Vitamin B12: {this.props.usedIngredients.reduce(GetVitaminB12, 0).toFixed(digits)}</div>
                <div>Vitamin D: {this.props.usedIngredients.reduce(GetVitaminD, 0).toFixed(digits)}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NutritionalValue);