import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import RecipeList from "./RecipeList";
import Box from "@material-ui/core/Box";
import MenueSelection from "./MenueSelection";
import RecipeSummary from "./RecipeSummary";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {clearSelectedRecipes} from "../actions/selectRecipe";
import SummaryChart from "./SummaryChart";
import {Switch, Route} from "react-router-dom";
import Summary from "./Summary";

function mapStateToProps(state) {
  return {
    recipeGroups: state.recipeGroups.map(group => ({
      name: group.name,
      recipes: group.recipes.map(id => ({
        name: state.recipes[id].name,
        id: id
      }))
    })),
    selectedRecipes: state.selectedRecipes
  };
}

class Home extends Component {
  render() {
    const recipeLists = this.props.recipeGroups.map((group) => (
      <Box key={group.name} mb={2}>
        <RecipeList recipeList={group} />
      </Box>
    ));

    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={2}>
            {recipeLists}
            <Button variant="contained"
                    disabled={this.props.selectedRecipes.length === 0}
                    onClick={() => this.props.dispatch(clearSelectedRecipes())}>Clear Selection</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={2}>
            {
              <Switch>
                <Route path="/summary/">
                  <Summary/>
                </Route>
                <Route>
                  {this.props.selectedRecipes.length === 0 ?
                    <MenueSelection/> :
                    <div>
                      <RecipeSummary/>
                      <Button variant="contained" component={Link} to="/profile">Profile</Button>
                      <Button variant="contained" style={{marginLeft: "1rem"}} component={Link}
                              to="/summary">Summary</Button>
                    </div>
                  }
                </Route>
              </Switch>
            }
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
)(Home);