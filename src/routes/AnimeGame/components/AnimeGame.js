import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'

const styleSheet = createStyleSheet('AnimeGame', {
  loading: {
    display: 'block',
    margin: '0 auto',
  },
});

class AnimeGame extends Component {

  componentDidMount() {
    { this.props.selectedReddit("animegames") }
  }

  render() {
    const classes = this.props.classes;
    const isEmpty = this.props.items.length === 0;
    const mapItem = [];
    for (let i = 0; i < 10; i++)
      mapItem.push(this.props.items[i]);

    return (

      <div>
        {isEmpty
          ? <CircularProgress className={classes.loading} />
          : <div>
            <Paper elevation={24}>
              <List>
                {mapItem.map((item, index) =>
                  <ListItem key={item.id}>
                    <a href={item.url}>
                      <ListItemText primary={item.title} secondary={item.site + " " + new Date(item.updated_at).toLocaleString()} />
                    </a>
                  </ListItem>
                )}
              </List>
            </Paper>
          </div>
        }
      </div>
    )
  }
}

AnimeGame.propTypes = {
  // selectedReddit: PropTypes.string.isRequired,
}

export default withStyles(styleSheet)(AnimeGame)
