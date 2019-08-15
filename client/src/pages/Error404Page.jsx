import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Error404Page extends Component {
  render() {
    return <div>Error404Page</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error404Page);
