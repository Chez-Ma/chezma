import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './RecipeSummary.css'
import connect from "react-redux/es/connect/connect";
import Box from "@material-ui/core/Box";
import NutritionalValue from "./NutritionalValue";
import EaternityRating from "./EaternityRating";


function mapStateToProps(state) {
  return {
    recipes: state.selectedRecipes.map((id) => {
      return state.recipes[id];
    }).sort((a, b) => (a.name > b.name) ? 1 : -1)
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
                        <div  style={{display: "inline-block"}}>
                            <img width={150} height={150} src={recipe.img} alt={recipe.imgAlt}/>
                        </div>
                        <div  style={{display: "inline-block", marginLeft: "20px"}}>
                            <EaternityRating  {...recipe}/>
                        </div>
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
                            <NutritionalValue {...recipe}/>
                        </CardContent>
                    </Collapse>
                </Card>
              </Box>
            ))
        );
    }
}

export default connect(mapStateToProps)(RecipeSummary);