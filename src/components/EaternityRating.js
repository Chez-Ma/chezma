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


        function GetClimate(total, ingredient) {
            if (HasNoEaternityRating(ingredient)
                || ingredient.eaternityRating.climate === undefined || ingredient.eaternityRating.climate === null) {
                return 0;
            }
            total += ingredient.eaternityRating.climate;
            return total;
        };


        function GetWaterConsumption(total, ingredient) {
            if (HasNoEaternityRating(ingredient)
                || ingredient.eaternityRating.waterConsumption === undefined || ingredient.eaternityRating.waterConsumption === null) {
                return 0;
            }
            total += ingredient.eaternityRating.waterConsumption;
            return total;
        };


        function GetVita(total, ingredient) {
            if (HasNoEaternityRating(ingredient)
                || ingredient.eaternityRating.vita === undefined || ingredient.eaternityRating.vita === null) {
                return 0;
            }
            total += ingredient.eaternityRating.vita;
            return total;
        };


        function GetRainforest(total, ingredient) {
            if (HasNoEaternityRating(ingredient)
                || ingredient.eaternityRating.rainForest === undefined || ingredient.eaternityRating.rainForest === null) {
                return 0;
            }
            total += ingredient.eaternityRating.rainForest;
            return total;
        };


        return (
            <div>
                <h4>Eaternity rating</h4>
                <div>Climate: {(this.props.usedIngredients.reduce(GetClimate, 0) / this.props.usedIngredients.length).toFixed(digits)}</div>
                <div>Water consumption: {(this.props.usedIngredients.reduce(GetWaterConsumption, 0) / this.props.usedIngredients.length).toFixed(digits)}</div>
                <div>Vita: {(this.props.usedIngredients.reduce(GetVita, 0) / this.props.usedIngredients.length).toFixed(digits)}</div>
                <div>Rainforest: {(this.props.usedIngredients.reduce(GetRainforest, 0) / this.props.usedIngredients.length).toFixed(digits)}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EaternityRating);