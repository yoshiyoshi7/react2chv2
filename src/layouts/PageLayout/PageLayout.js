import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Sidebar from 'react-sidebar';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

var sidebarContent = <MenuItem>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</MenuItem>;

export const PageLayout = ({ children }) => (


  <div>
    <Sidebar sidebar={sidebarContent}
      docked={true}>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />

      <h1>React Redux Starter Kit</h1>
      <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
      {' · '}
      <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
      <div className='page-layout__viewport'>
        {children}
      </div>
    </Sidebar>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
