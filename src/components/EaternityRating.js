import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import StarRating from "./StarRating";

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


class EaternityRating extends Component {

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
        const waterConsumption = {rating: GetRoundedSum(this.props.usedIngredients, i=>i.waterConsumption)};
        let vita = GetRoundedSum(this.props.usedIngredients, i=>i.vita);
        let rainForest = GetRoundedSum(this.props.usedIngredients, i=>i.rainForest);

        return (
            <div>
                <h4>Eaternity rating</h4>
                <div>CO2-foodprint: <StarRating {...{rating: climate}} /></div>
                <div>Water consumption: <StarRating {...{rating: waterConsumption}}/></div>
                <div>Animal welfare: <StarRating {...{rating: vita}}/></div>
                <div>Rainforest protected: <StarRating {...{rating: rainForest}}/></div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EaternityRating);
