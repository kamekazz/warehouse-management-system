import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import LocationIcon from '@material-ui/icons/GpsFixed';
import RedeemIcon from '@material-ui/icons/Redeem';

import history from '../redux/history';
import styled from 'styled-components';
import { styleColor } from '../Styles/styleThem';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

function NestedList(props) {
  const { handleDrawerToggle, activeUrl } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }
  function NavPush(url) {
    handleDrawerToggle();
    history.push(url);
  }

  const rdMaintenanceList = () => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          color="primary"
          component="div"
          id="nested-list-subheader"
        >
          Maintenance
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={() => NavPush('/app/location')}>
        <ListItemIcon>
          <LocationIcon
            color={activeUrl === '/app/location' ? 'secondary' : 'inherit'}
          />
        </ListItemIcon>
        <ListItemTextEl
          inputcolor={activeUrl === '/app/location' ? true : false}
          primary="Location"
        />
      </ListItem>

      <ListItem button onClick={() => NavPush('/app/product')}>
        <ListItemIcon>
          <RedeemIcon
            color={activeUrl === '/app/product' ? 'secondary' : 'inherit'}
          />
        </ListItemIcon>
        <ListItemTextEl
          inputcolor={activeUrl === '/app/product' ? true : false}
          primary="Product"
        />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <CollapseEl in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </CollapseEl>
    </List>
  );

  return (
    <>
      <ListItem style={{ height: '90px', background: styleColor.color.black1 }}>
        <img src="/img/1f087f06-5b76-468d-8d3b-57c236755776_200x200.png" />
      </ListItem>
      {rdMaintenanceList()}
    </>
  );
}

const mapStateToProps = state => ({
  activeUrl: state.auth.liveUrl
});

export default connect(mapStateToProps)(NestedList);

const ListItemTextEl = styled(ListItemText)`
  color: ${props => (props.inputcolor ? styleColor.secondary.dark : 'white')};
`;

const CollapseEl = styled(Collapse)`
  background: ${styleColor.color.black1};
`;
