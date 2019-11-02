import React, {Component} from 'react';
import IngredientListItem from "./IngredientListItem";
import IconButton from "@material-ui/core/IconButton";
import {ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { StylesProvider } from '@material-ui/core/styles';
import List from "@material-ui/core/List";


class IngredientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const ingredientListItems = this.props.ingredientList.ingredients.map((ingredient) => {
      return <IngredientListItem ingredient={ingredient}/>
    });

    return (
      <Card>
        <CardActions disableSpacing>
          <div>{this.props.ingredientList.name}</div>
          <StylesProvider injectFirst>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </StylesProvider>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List>
              {ingredientListItems}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default IngredientList;