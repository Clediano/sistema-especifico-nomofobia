import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = () => ({
  marginBlock: {
    marginBottom: '15px'
  }
});

class GridItem extends Component {
  render() {

    const { classes, hidden } = this.props;

    return (
      <Grid hidden={hidden} item xs={12} sm={12} className={classes.marginBlock} >
        {this.props.children}
      </Grid>
    )
  }
}
export default withStyles(styles)(GridItem)