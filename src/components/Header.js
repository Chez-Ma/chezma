import React, {Component} from 'react';
import "./Header.css"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>
            <Typography className="header-title" variant="h6">
              <img src={"/images/ChezMaLogo_White.png"} width={"100px"} height={"30px"} style={{"margin-top": "12px"}}/>
            </Typography>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;