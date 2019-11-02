import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const mail = "test";
const password = "password";

class Login extends Component {
  render() {
    return (
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
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    );
  }
}

export default Login;