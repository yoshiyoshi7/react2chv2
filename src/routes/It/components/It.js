import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import { withStyles, createStyleSheet } from 'material-ui/styles'

const styleSheet = createStyleSheet('It', {
  avatar: {
    margin: 10,
  },
  line: {
    textdecoration: 'none',
  },
});

class It extends Component {

  componentDidMount() {
    { this.props.selectedReddit("its") }
  }

  render() {
    const isEmpty = this.props.items.length === 0;

    return (

      <div>
        {isEmpty
          ? <h2>Loading...</h2>
          : <div>
            <Paper elevation={24}>
              <List>
                {this.props.items.map((item, index) =>
                  <a href={item.url}>
                    <ListItem key={item.id} button>
                      {/*<Avatar alt="Remy Sharp" src={item.img} />*/}
                      <ListItemText primary={item.title} secondary={item.site + " " + new Date(item.updated_at).toLocaleString()} />
                    </ListItem>
                  </a>
                )}
              </List>
            </Paper>
          </div>
        }
      </div>
    )
  }
}

It.propTypes = {
  // selectedReddit: PropTypes.string.isRequired,
}

export default withStyles(styleSheet)(It)
