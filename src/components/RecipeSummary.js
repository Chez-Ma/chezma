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

const exampleRecipe = [
    {
        name: "Rindsgulasch",
        value: "rindsgulasch",
        img: "/images/Gulasch%201.jpg",
        imgAlt: "a gulasch"
    },
    {
        name: "Brokkoli",
        value: "brokkoli",
        img: "/images/Brokkoli.jpg",
        imgAlt: "a brokkoli"
    }];

class RecipeSummary extends Component {

    constructor(props) {
        super(props);

        let reducer = (previousValue, currentValue) => {previousValue[currentValue.value] = false; return previousValue};
        this.state =  exampleRecipe.reduce(reducer, {});
    }

    handleExpandedChanged = name => _ => {
        this.setState({[name]: !this.state[name]});
    };
    render() {
        return (
                exampleRecipe.map((recipe, i) => (
                <Card key={i}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
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
                            <Typography paragraph>Method:
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))
        );
    }
}

export default RecipeSummary;