// @flow
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { browserHistory } from 'react-router';
import SwipeableViews from 'react-swipeable-views';

const TabContainer = props =>
  <div style={{ padding: 20 }}>
    {props.children}
  </div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet('ScrollableTabsButtonAuto', theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.getContrastText(theme.palette.primary[500]),
  },
}));

class ScrollableTabsButtonAuto extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
    switch (index) {
      case 0:
        return browserHistory.push('/');
      case 1:
        return browserHistory.push('/counter');
      case 2:
        return browserHistory.push('/it');
      default:
        return browserHistory.push('/');
    }
  };

  handleChangeIndex = index => {
    this.setState({ index });
    switch (index) {
      case 0:
        return browserHistory.push('/');
      case 1:
        return browserHistory.push('/counter');
      case 2:
        return browserHistory.push('/it');
      default:
        return browserHistory.push('/');
    }
  };

  render() {
    const classes = this.props.classes;

    return (
      <div>
        <div className={classes.appBar}>
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </div>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>{this.props.children}</TabContainer>
          <TabContainer>{this.props.children}</TabContainer>
          <TabContainer>{this.props.children}</TabContainer>
          <TabContainer>{'Item Four'}</TabContainer>
          <TabContainer>{'Item Five'}</TabContainer>
          <TabContainer>{'Item Six'}</TabContainer>
          <TabContainer>{'Item Seven'}</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ScrollableTabsButtonAuto);