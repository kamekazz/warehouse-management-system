import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper elevation={12} className={classes.root}>
      <InputBase className={classes.input} placeholder="Search..." />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const Error404Page = () => {
  const [openPage, setOpenPage] = useState(false);
  const one = '';
  useEffect(() => {
    setOpenPage(true);
  }, [one]);

  return (
    <MainContainerEl>
      <Grow in={openPage}>
        <ErrorTextEL>404</ErrorTextEL>
      </Grow>
      <Fade in={openPage}>
        <h2>Oops, an error has occurred. Page not found!</h2>
      </Fade>
      <Slide direction="up" in={openPage} mountOnEnter unmountOnExit>
        <form role="search">
          <CustomizedInputBase />
        </form>
      </Slide>
      <Grow in={openPage}>
        <RemoveLickLine to="/">
          <Button variant="contained" color="primary">
            Go To Home Page
          </Button>
        </RemoveLickLine>
      </Grow>
    </MainContainerEl>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error404Page);

const ErrorTextEL = styled.h1`
  font-size: 150px;
  font-weight: 900;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`;

const MainContainerEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const RemoveLickLine = styled(Link)`
  text-decoration: none;
`;
