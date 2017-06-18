import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//vimport { fetchPostsIfNeeded } from '../actions'
// import Posts from '../components/Posts'
import { selectedReddit } from '../modules/it'
import Button from 'material-ui/Button'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'

class It extends Component {

  componentDidMount() {
    // selectedReddit()
  }

  handleChange1 = () => {
    { this.props.selectedReddit("its") }
  }

  handleChange2 = () => {
    { this.props.selectedReddit("socialgames") }
  }

  render() {
    const it = this.props.it;
    const isEmpty = this.props.items === 0;

    return (
      <div>

        <div>
          <Button raised onTouchTap={this.handleChange1}>Default</Button>
          <Button raised onTouchTap={this.handleChange2}>Default2</Button>

          {isEmpty

            ? <div>
              <Paper zDepth={5}>
                <List>
                  <Divider />
                  {this.props.items.map((post) =>
                    <a href={post.url} style={styles.a_container}>
                      <ListItem
                        key={post.title}
                        leftAvatar={<Avatar src={post.img} />}
                        primaryText={post.title}
                        secondaryText={post.site + " " + new Date(post.updated_at).toLocaleString()}
                      />
                    </a>
                  )}
                </List>
              </Paper>
            </div>
            : <h2>Loading...</h2>
          }

        </div>

      </div>
    )
  }
}

It.propTypes = {
  // selectedReddit: PropTypes.string.isRequired,
}

export default It
