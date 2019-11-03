import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import {selectRecipe} from "../actions/selectRecipe";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

class About extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            name: "About us",
            img: "/images/Team_bearbeitet.jpg",
            imgAlt: "The flow of the chezma"
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <span className={classes.root}>
                    <span
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    >
                    <ButtonBase
                        focusRipple
                        key={this.state.name}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: "100%"
                        }}
                        component={Link}
                        to="/home"
                    >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${this.state.img})`,
              }}
          />
                        <span className={classes.imageBackdrop}/>
                        <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {this.state.name}
                <span className={classes.imageMarked}/>
            </Typography>
          </span>
                    </ButtonBase>
                    </span>
            </span>
        );
    }
}


const styles = theme => ({
    root: {
        position: "fixed",
        minWidth: 300,
        width: '100%',
        height: '100%'
    },
    image: {
        position: 'relative',
        height: "100%",
        [theme.breakpoints.down('xs')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

export default withStyles(styles)(About);