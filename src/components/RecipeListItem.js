import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";

class RecipeListItem extends Component {
  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.recipe.name} />
        <ListItemSecondaryAction>
          <Checkbox
            /*edge="end"
            onChange={handleToggle(value)}
            checked={checked.indexOf(value) !== -1}
            inputProps={{ 'aria-labelledby': labelId }}*/
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default RecipeListItem;