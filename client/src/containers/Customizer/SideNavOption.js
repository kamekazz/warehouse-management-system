import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  ABOVE_THE_HEADER,
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
  INSIDE_THE_HEADER,
  MINI_DRAWER,
  VERTICAL_NAVIGATION
} from 'constants/ActionTypes'

import {changeNavigationStyle, setDrawerType, setHorizontalMenuPosition} from 'actions/index';

import {Button, ButtonGroup} from 'reactstrap';

class Customizer extends React.Component {
  setFixedDrawer = () => {
    this.props.setDrawerType(FIXED_DRAWER);
  };
  setCollapsedDrawer = () => {
    this.props.setDrawerType(COLLAPSED_DRAWER);
  };
  setMiniDrawer = () => {
    this.props.setDrawerType(MINI_DRAWER);
  };

  render() {
    const {drawerType, navigationStyle, horizontalNavPosition} = this.props;

    return (
      <div className="side-nav-option">

        <div className="mb-1">
          <h3 className="mb-1 mt-4">Navigation Style</h3>
          <div className="text-left py-3">
            <FormControl className="d-block" component="fieldset" required>
              <RadioGroup className="sidenav-dir"
                          aria-label="nav-style"
                          name="navStyle"
                          value={navigationStyle}
                          onChange={(event) => {
                            this.props.changeNavigationStyle(event.target.value)
                          }}
              >
                <FormControlLabel control={
                  <Radio/>} value={HORIZONTAL_NAVIGATION} label="Horizontal"/>
                <FormControlLabel control={
                  <Radio/>} value={VERTICAL_NAVIGATION} label="Vertical"/>

              </RadioGroup>
            </FormControl>
          </div>
        </div>
        {navigationStyle === HORIZONTAL_NAVIGATION ? <ButtonGroup>
            <Button color="default"
                    className={`jr-btn  ${horizontalNavPosition === INSIDE_THE_HEADER && 'active' } `}
                    onClick={() => {
                      this.props.setHorizontalMenuPosition(INSIDE_THE_HEADER)
                    }}>Inside</Button>
            <Button color="default"
                    className={`jr-btn ${horizontalNavPosition === ABOVE_THE_HEADER && 'active'} `}
                    onClick={() => {
                      this.props.setHorizontalMenuPosition(ABOVE_THE_HEADER)
                    }}>Top</Button>
            <Button color="default"
                    className={`jr-btn ${horizontalNavPosition === BELOW_THE_HEADER && 'active' } `}
                    onClick={() => {
                      this.props.setHorizontalMenuPosition(BELOW_THE_HEADER)
                    }}>Below</Button>
          </ButtonGroup>
          :
          <ButtonGroup>
            <Button color="default"
                    className={`jr-btn  ${drawerType === FIXED_DRAWER && 'active' } `}
                    onClick={this.setFixedDrawer.bind(this)}>Fixed</Button>
            <Button color="default"
                    className={`jr-btn ${drawerType === COLLAPSED_DRAWER && 'active'} `}
                    onClick={this.setCollapsedDrawer.bind(this)}>Collapsed</Button>
            <Button color="default"
                    className={`jr-btn ${drawerType === MINI_DRAWER && 'active' } `}
                    onClick={this.setMiniDrawer.bind(this)}>Mini</Button>
          </ButtonGroup>
        }


      </div>);
  }
}

const mapStateToProps = ({settings}) => {
  const {drawerType, navigationStyle, horizontalNavPosition} = settings;
  return {drawerType, navigationStyle, horizontalNavPosition}
};

export default withRouter(connect(mapStateToProps, {
  changeNavigationStyle,
  setDrawerType,
  setHorizontalMenuPosition
})(Customizer));

