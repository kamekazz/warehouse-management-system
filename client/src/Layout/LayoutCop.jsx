import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import NavBar from './NavBar';
import DrawerCop from './DrawerCop';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
      <DrawerCop toggleDrawer={toggleDrawer('left', false)} />
    </div>
  );

  return (
    <>
      <NavBar toggleDrawer={toggleDrawer('left', true)} />
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList()}
      </Drawer>
      {props.children}
    </>
  );
}

{
  /* <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
{sideList('left')}
</Drawer> */
}
