import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
// import InfiniteScroll from 'react-infinite-scroller' これでできそうだがserver側で10件返すとか細かく出来るように
// してthis.props.itemsに入れないと無理っぽいのでserverlessにしてからやる

const styleSheet = createStyleSheet('It', {
  loading: {
    display: 'block',
    margin: '0 auto',
  },
  card: {
    marginBottom: 10,
  },
});

class It extends Component {

  componentDidMount() {
    { this.props.selectedReddit("its") }
  }

  render() {
    const classes = this.props.classes
    const isEmpty = this.props.items.length === 0
    const mapItem = []
    for (let i = 0; i < 10; i++)
      mapItem.push(this.props.items[i])

    return (
      <div>
        {isEmpty
          ? <CircularProgress className={classes.loading} />
          : <div>

              {mapItem.map((item, index) =>
                <Card className={classes.card} key={item.id}>
                  <a href={item.url}>
                    <CardContent>
                      <Typography type="body2" gutterBottom>{item.title}</Typography>
                      <Typography type="caption">{item.site + " " + new Date(item.updated_at).toLocaleString()}</Typography>
                    </CardContent>
                  </a>
                </Card>
              )}

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
