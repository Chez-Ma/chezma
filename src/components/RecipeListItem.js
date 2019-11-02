import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import connect from "react-redux/es/connect/connect";
import {selectRecipe, unselectRecipe} from "../actions/selectRecipe";

class RecipeListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  handleToggle = () => {
    this.setState({
      selected: !this.state.selected
    });
    if(this.state.selected){
      this.props.dispatch(unselectRecipe(this.props.recipe.id))
    }
    else {
      this.props.dispatch(selectRecipe(this.props.recipe.id))
    }
  };

  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.recipe.name} />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={this.handleToggle}
            checked={this.state.select}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default connect()(RecipeListItem);