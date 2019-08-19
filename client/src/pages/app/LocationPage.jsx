import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../redux/Auth/user.actions';

export class LocationPage extends Component {
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }
  render() {
    return <div>LocationPage</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPage);
