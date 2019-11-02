import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import connect from "react-redux/es/connect/connect";

function mapStateToProps(state) {
    return {
        menus: state.menus,
    }
}

class MenueSelection extends Component {
    constructor(props) {
        super(props);

        let reducer = (previousValue, currentValue) => {
            previousValue[currentValue.value] = false;
            return previousValue
        };

        this.state = Object.values(this.props.menus).reduce(reducer, {});
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {Object.values(this.props.menus).map(menu => (
                    <span
                        style={{
                            width: "30%",
                            margin: "0.2rem"
                        }}
                    >
                    <ButtonBase
                        focusRipple
                        key={menu.name}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: "100%",
                            padding: "1rem"
                        }}
                    >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${menu.img})`,
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
              {menu.name}
                <span className={classes.imageMarked}/>
            </Typography>
          </span>
                    </ButtonBase>
                    </span>
                ))}
            </div>
        );
    }
}


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        padding: "1rem"
    },
    image: {
        position: 'relative',
        height: 200,
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

export default withStyles(styles)(connect(mapStateToProps)(MenueSelection));