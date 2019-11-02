import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import RecipeList from "./RecipeList";
import Box from "@material-ui/core/Box";
import MenueSelection from "./MenueSelection";

function mapStateToProps(state) {
  return {
    recipeGroups: state.recipeGroups.map(group => ({
      name: group.name,
      recipes: group.recipes.map(id => ({
        name: state.recipes[id].name,
        id: id
      }))
    }))
  };
}

class Home extends Component {
  render() {
    const recipeLists = this.props.recipeGroups.map((group) => (
      <Box mb={2}>
        <RecipeList recipeList={group} />
      </Box>
    ));

    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={2}>
            {recipeLists}
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