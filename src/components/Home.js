import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import IngredientList from "./IngredientList";
import Box from "@material-ui/core/Box";
import MenueSelection from "./MenueSelection";

const dummyData = [{
  name: "Fleisch",
  ingredients: [
    {name: "Rindsgulasch"},
    {name: "Gordon-Bleu"}],
},{
  name: "Gemüse",
  ingredients: [{name: "Grüner Salat"}]
}]

function mapStateToProps(state) {
  return {};
}

class Home extends Component {


  render() {
    const ingredientLists = dummyData.map((ingredientList) => (
      <Box mb={2}>
        <IngredientList ingredientList={ingredientList} />
      </Box>
    ));

    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={2}>
            {ingredientLists}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={2}>
              <MenueSelection/>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
)(Home);