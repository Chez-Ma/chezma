import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CenteredLayout from "./CenteredLayout";
import {Link} from "react-router-dom";

const mail = "test";
const password = "password";

class Login extends Component {
  render() {
    return (
      <CenteredLayout>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="user-mail"
              label="E-Mail"
              margin="normal"
              type="test"
              value={mail}
              required
            />
          </div>
          <div>
            <TextField
              id="user-pw"
              label="Password"
              margin="normal"
              type="password"
              value={password}
              required
            />
          </div>
          <div>
            <Button variant="contained" color="primary" component={Link} to="/home">
              Login
            </Button>
          </div>
        </form>
      </CenteredLayout>
    );
  }
}

export default Login;