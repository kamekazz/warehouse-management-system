import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../redux/Notification/notification.actions';

function SearchTable() {
  return <Paper>SearchTable SearchTable</Paper>;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  warningMsgBar,
  infoMsgBar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTable);
