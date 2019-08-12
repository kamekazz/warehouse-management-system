import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabContainer({children, dir}) {
  return (
    <div dir={dir} style={{padding: 8 * 3}}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class CardTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  render() {
    const {theme} = this.props;

    return (
      <div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab className="tab" label="HOME"/>
          <Tab className="tab" label="PROFILE"/>
          <Tab className="tab" label="MESSAGES"/>
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem.</TabContainer>
          <TabContainer dir={theme.direction}>It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
            look like readable English</TabContainer>
          <TabContainer dir={theme.direction}>There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or randomised words which don't look
            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
            repeat predefined chunks as necessary, making this the first true generator on the Internet. </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

CardTabs.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(CardTabs);