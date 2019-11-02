import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './RecipeSummary.css'
import connect from "react-redux/es/connect/connect";
import Box from "@material-ui/core/Box";
import NutritionalValue from "./NutritionalValue";


function mapStateToProps(state) {
  return {
    recipes: state.selectedRecipes.map((id) => {
      return state.recipes[id];
    })
  };
}

class RecipeSummary extends Component {

    constructor(props) {
        super(props);

        let reducer = (previousValue, currentValue) => {
          previousValue[currentValue.value] = false;
          return previousValue
        };
        this.state = this.props.recipes.reduce(reducer, {});
    }

    handleExpandedChanged = name => _ => {
        this.setState({[name]: !this.state[name]});
    };
    render() {
        return (
            this.props.recipes.map((recipe, i) => (
              <Box m={2}>
                <Card key={i}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" src={recipe.icon} />
                        }
                        title={recipe.name}
                    />
                    <CardContent>
                        <img width={150} height={150} src={recipe.img} alt={recipe.imgAlt}/>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            onClick={this.handleExpandedChanged(recipe.name)}
                            aria-expanded={this.state[recipe.name]}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state[recipe.name]} timeout="auto" unmountOnExit>
                        <CardContent>
                                <NutritionalValue />
                        </CardContent>
                    </Collapse>
                </Card>
              </Box>
            ))
        );
    }
}

export default connect(mapStateToProps)(RecipeSummary);