// @flow
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { browserHistory } from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import ScrollToTop from './ScrollToTop'

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
        return browserHistory.push('/socialgame');
      case 2:
        return browserHistory.push('/news');
      case 3:
        return browserHistory.push('/sports');
      case 4:
        return browserHistory.push('/animegame');
      case 5:
        return browserHistory.push('/lives');
      case 6:
        return browserHistory.push('/entertainers');
      // case 0:
      //   return browserHistory.push('/');
      // case 1:
      //   return browserHistory.push('/counter');
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
        return browserHistory.push('/socialgame');
      case 2:
        return browserHistory.push('/news');
      case 3:
        return browserHistory.push('/sports');
      case 4:
        return browserHistory.push('/animegame');
      case 5:
        return browserHistory.push('/lives');
      case 6:
        return browserHistory.push('/entertainers');
      // case 0:
      //   return browserHistory.push('/');
      // case 1:
      //   return browserHistory.push('/counter');
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
            <Tab label="IT・ガジェット" />
            <Tab label="ソーシャルゲーム" />
            <Tab label="ニュース" />
            <Tab label="スポーツ" />
            <Tab label="アニメ・ゲーム" />
            <Tab label="生活" />
            <Tab label="芸能" />
            {/*<Tab label="Home" />
            <Tab label="Counter" />
            <Tab label="Item Seven" />*/}
          </Tabs>
        </div>
        <ScrollToTop>
          <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
            <TabContainer>{this.props.children}</TabContainer>
            <TabContainer>{this.props.children}</TabContainer>
            <TabContainer>{this.props.children}</TabContainer>
            <TabContainer>{this.props.children}</TabContainer>
            <TabContainer>{this.props.children}</TabContainer>
            <TabContainer>{this.props.children}</TabContainer>
            <TabContainer>{this.props.children}</TabContainer>
            {/*<TabContainer>{this.props.children}</TabContainer>
          <TabContainer>{this.props.children}</TabContainer>
          <TabContainer>{'Item Seven'}</TabContainer>*/}
          </SwipeableViews>
        </ScrollToTop>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ScrollableTabsButtonAuto);