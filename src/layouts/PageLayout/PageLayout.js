import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto'



const styleSheet = createStyleSheet('PageLayout', {
  root: {
    width: '100%',
  },
});

class PageLayout extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">Matome</Typography>
          </Toolbar>
        </AppBar>
        <ScrollableTabsButtonAuto children={this.props.children} />
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default withStyles(styleSheet)(PageLayout);
