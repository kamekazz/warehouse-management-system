import React from 'react';
import Drawer from '@material-ui/core/Drawer';

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
      <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
        <DrawerCop handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
      {props.children}
    </>
  );
}
