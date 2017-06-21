import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu';
import { browserHistory } from 'react-router';

const styleSheet = createStyleSheet('PageLayout', {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

class PageLayout extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleChange = () => {
    this.handleRequestClose()
    return browserHistory.push('/development')
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>Matome</Typography>

            <IconButton color="contrast" aria-label="Menu" aria-owns="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}
            >
              <MenuItem onClick={this.handleChange}>更新履歴</MenuItem>
            </Menu>

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
