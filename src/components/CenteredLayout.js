import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class CenteredLayout extends Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}

export default CenteredLayout;