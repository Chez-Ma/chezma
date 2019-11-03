import React, {Component} from 'react';
import {connect} from 'react-redux';
import SummaryChart from "./SummaryChart";

function mapStateToProps(state) {
  return {};
}

class Summary extends Component {
  render() {
    return (
      <div>
        <SummaryChart/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Summary);