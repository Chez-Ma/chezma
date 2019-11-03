import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

function mapStateToProps(state, otherProps) {

    return {
        usedIngredients: otherProps.ingredients.map((ingredient) => {
            return state.ingredients.find(function(element) {
                return ingredient.id === element.id;
            });
        })
    };
}

const digits = 2;

class NutritionalValue extends Component {

    render() {

        function HasNoNutritionalValues(ingredient) {
            return  ingredient === undefined
            || ingredient === null
                || ingredient.nutritionalValues === undefined
                || ingredient.nutritionalValues === null;
        };

        function GetElement(total, ingredient, propertyDelegate) {
            if (HasNoNutritionalValues(ingredient)
                || propertyDelegate(ingredient.nutritionalValues) === undefined
                || propertyDelegate(ingredient.nutritionalValues) === null) {
                return 0;
            }

            total += propertyDelegate(ingredient.nutritionalValues);
            return total;
        };

        function GetRoundedSum(usedIngredients, propertyDelegate) {
            return usedIngredients
                .reduce((s,i) => GetElement(s,i,propertyDelegate), 0)
                .toFixed(digits);
        }

        let calories = GetRoundedSum(this.props.usedIngredients, i=>i.calories);
        let carbohydrates = GetRoundedSum(this.props.usedIngredients, i=>i.carbohydrates);
        let fat = GetRoundedSum(this.props.usedIngredients, i=>i.fat);
        let protein = GetRoundedSum(this.props.usedIngredients, i=>i.protein);
        let calcium = GetRoundedSum(this.props.usedIngredients, i=>i.calcium);
        let vitaminB12 = GetRoundedSum(this.props.usedIngredients, i=>i.vitaminB12);
        let vitaminD = GetRoundedSum(this.props.usedIngredients, i=>i.vitaminD);

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

export default connect(mapStateToProps)(NutritionalValue);