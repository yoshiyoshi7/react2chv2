import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//vimport { fetchPostsIfNeeded } from '../actions'
// import Posts from '../components/Posts'
import { selectedReddit } from '../modules/it'

class It extends Component {

  componentDidMount() {
    selectedReddit()
  }

  render() {
    const it = this.props.it;

    return (
      <div>

        <div>{it}

        </div>

      </div>
    )
  }
}

It.propTypes = {
  // selectedReddit: PropTypes.string.isRequired,
}

export default It
