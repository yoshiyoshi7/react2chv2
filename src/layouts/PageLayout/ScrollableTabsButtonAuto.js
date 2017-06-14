// @flow
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import {browserHistory} from 'react-router';

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
            <Tab label="Item One"/>
            <Tab label="Item Two"/>
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </div>
        {this.state.index === 0 && <TabContainer>{this.props.children}</TabContainer>}
        {this.state.index === 1 && <TabContainer>{this.props.children}</TabContainer>}
        {this.state.index === 2 && <TabContainer>{this.props.children}</TabContainer>}
        {this.state.index === 3 && <TabContainer>{'Item Four'}</TabContainer>}
        {this.state.index === 4 && <TabContainer>{'Item Five'}</TabContainer>}
        {this.state.index === 5 && <TabContainer>{'Item Six'}</TabContainer>}
        {this.state.index === 6 && <TabContainer>{'Item Seven'}</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ScrollableTabsButtonAuto);