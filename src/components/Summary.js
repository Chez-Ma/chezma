import React, {Component} from 'react';
import {connect} from 'react-redux';
import SummaryChart from "./SummaryChart";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function mapStateToProps(state) {
  const recipes = state.selectedRecipes.map((id) => {
    return state.recipes[id];
  });

  let ingredients = recipes.reduce((cur, r) => cur.concat(r.ingredients), []);
  ingredients = ingredients.map((i) => ({
    ...state.ingredients.find(j => j.id === i.id),
    weight: i.weight
  })).filter(i => !!i.nutritionalValues);

  let calories = ingredients.reduce((cur, i) => cur + (i.nutritionalValues.calories || 0) * i.weight / 100, 0);
  let carbohydrates = ingredients.reduce((cur, i) => cur + (i.nutritionalValues.carbohydrates || 0) * i.weight / 100, 0);
  let fat = ingredients.reduce((cur, i) => cur + (i.nutritionalValues.fat || 0) * i.weight / 100, 0);
  let protein = ingredients.reduce((cur, i) => cur + (i.nutritionalValues.protein || 0) * i.weight / 100, 0);
  let calcium = ingredients.reduce((cur, i) => cur + (i.nutritionalValues.calcium || 0) * i.weight / 100, 0);
  let vitaminB12 = ingredients.reduce((cur, i) => cur + (i.nutritionalValues.vitaminB12 || 0) * i.weight / 100, 0);
  let vitaminD = ingredients.reduce((cur, i) => cur + (i.nutritionalValues.vitaminD || 0) * i.weight / 100, 0);

  return {
    menu: {
      calories,
      carbohydrates,
      fat,
      protein,
      calcium,
      vitaminB12,
      vitaminD
    },
    reference: {
      calories: state.dailyConsumptionRecommendation.energy.ranges.range[7].male,
      carbohydrates: state.dailyConsumptionRecommendation.energy.ranges.range[7].male / 8,
      fat: state.dailyConsumptionRecommendation.fat.ranges.range[7].male,
      protein: state.dailyConsumptionRecommendation.protein.ranges.range[7].male * 70,
      calcium: state.dailyConsumptionRecommendation.calcium.ranges.range[7].male,
      vitaminB12: state.dailyConsumptionRecommendation.vitaminB12.ranges.range[7].male,
      vitaminD: state.dailyConsumptionRecommendation.vitaminD.ranges.range[3].male
    }
  }
}

class Summary extends Component {
  render() {
    return (
      <div>
        <SummaryChart name={"Kalorien"} value={this.props.menu.calories} reference={this.props.reference.calories}/>
        <SummaryChart name={"Kohlenhydrate"} value={this.props.menu.carbohydrates} reference={this.props.reference.carbohydrates}/>
        <SummaryChart name={"Fett"} value={this.props.menu.fat} reference={this.props.reference.fat}/>
        <SummaryChart name={"Protein"} value={this.props.menu.protein} reference={this.props.reference.protein}/>
        <SummaryChart name={"Calcium"} value={this.props.menu.calcium} reference={this.props.reference.calcium}/>
        <SummaryChart name={"Vitamin B12"} value={this.props.menu.vitaminB12} reference={this.props.reference.vitaminB12}/>
        <SummaryChart name={"Vitamin D"} value={this.props.menu.vitaminD} reference={this.props.reference.vitaminD}/>
        <Button variant="contained" style={{marginLeft: "1rem"}} component={Link} to="/home">Back</Button>
        <Button variant="contained" style={{marginLeft: "1rem"}} component={Link} to="/home">Order</Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Summary);