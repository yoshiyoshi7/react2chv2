import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//vimport { fetchPostsIfNeeded } from '../actions'
// import Posts from '../components/Posts'
import { selectedReddit } from '../modules/it'
import Button from 'material-ui/Button';

class It extends Component {

  componentDidMount() {
    // selectedReddit()
  }

  handleChange1 = () => {
    selectedReddit("its")
  }
  handleChange2 = () => {
    selectedReddit("socialgames")
  }

  render() {
    const it = this.props.it;

    return (
      <div>

        <div>{it}
          <Button raised onTouchTap={this.handleChange1}>Default</Button>
          <Button raised onTouchTap={this.handleChange2}>Default2</Button>
        </div>

      </div>
    )
  }
}

It.propTypes = {
  // selectedReddit: PropTypes.string.isRequired,
}

export default It
