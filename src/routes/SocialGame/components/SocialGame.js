import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'

const styleSheet = createStyleSheet('SocialGame', {
  loading: {
    display: 'block',
    margin: '0 auto',
  },
});

class SocialGame extends Component {

  componentDidMount() {
    { this.props.selectedReddit("socialgames") }
  }

  render() {
    const classes = this.props.classes;
    const isEmpty = this.props.items.length === 0;

    return (

      <div>
        {isEmpty
          ? <CircularProgress className={classes.loading} />
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

SocialGame.propTypes = {
  // selectedReddit: PropTypes.string.isRequired,
}

export default withStyles(styleSheet)(SocialGame)
