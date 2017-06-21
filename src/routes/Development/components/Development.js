import React from 'react'
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('Development', theme => ({
}));


function Development(props) {
  const classes = props.classes;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography>これから書いていく</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Development.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styleSheet)(Development);
