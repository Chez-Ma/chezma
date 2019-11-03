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


class EaternityRating extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        function HasNoEaternityRating(ingredient) {
            return  ingredient === undefined
                || ingredient === null
                || ingredient.eaternityRating === undefined
                || ingredient.eaternityRating === null;
        };


        function GetElement(total, ingredient, propertyDelegate) {
            if (HasNoEaternityRating(ingredient)
                || propertyDelegate(ingredient.eaternityRating) === undefined
                || propertyDelegate(ingredient.eaternityRating) === null) {
                return 0;
            }

            total += propertyDelegate(ingredient.eaternityRating);
            return total;
        };

        function GetRoundedSum(usedIngredients, propertyDelegate) {
            return (usedIngredients
                .reduce((s,i) => GetElement(s,i,propertyDelegate), 0)
        / usedIngredients.length).toFixed(digits);
        }

        let climate = GetRoundedSum(this.props.usedIngredients, i=>i.climate);
        let waterConsumption = GetRoundedSum(this.props.usedIngredients, i=>i.waterConsumption);
        let vita = GetRoundedSum(this.props.usedIngredients, i=>i.vita);
        let rainForest = GetRoundedSum(this.props.usedIngredients, i=>i.rainForest);

        return (
            <div>
                <h4>Eaternity rating</h4>
                <div>Climate: {climate}</div>
                <div>Water consumption: {waterConsumption}</div>
                <div>Vita: {vita}</div>
                <div>Rainforest: {rainForest}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EaternityRating);