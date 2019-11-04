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
                <table>
                    <tbody>
                        <tr>
                            <td>Calories:</td>
                            <td>{calories}</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates:</td>
                            <td>{carbohydrates}</td>
                        </tr>
                        <tr>
                            <td>Fat:</td>
                            <td>{fat}</td>
                        </tr>
                        <tr>
                            <td>Protein:</td>
                            <td>{protein}</td>
                        </tr>
                        <tr>
                            <td>Calcium:</td>
                            <td>{calcium}</td>
                        </tr>
                        <tr>
                            <td>Vitamin B12:</td>
                            <td>{vitaminB12}</td>
                        </tr>
                        <tr>
                            <td>Vitamin D:</td>
                            <td>{vitaminD}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NutritionalValue);