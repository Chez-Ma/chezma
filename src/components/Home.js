import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";

function mapStateToProps(state) {
  return {};
}

class Home extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={6}>
          List
        </Grid>
        <Grid item xs={6}>
          Menu
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
)(Home);