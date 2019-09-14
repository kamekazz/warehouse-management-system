import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from './NavBar';
import DrawerCop from './DrawerCop';

export default function TemporaryDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <NavBar toggleDrawer={handleDrawerToggle} />
      <Spats />
      <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
        <DrawerCop handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
      {props.children}
    </>
  );
}

const Spats = () => (
  <AppBar position="static" elevation={0}>
    <Toolbar></Toolbar>
  </AppBar>
);
