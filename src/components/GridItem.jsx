import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = () => ({
  marginBlock: {
      marginBottom: '25px'
  }
});

class GridItem extends Component {
  render() {
    
    const { classes } = this.props;

    return(
        <Grid item xs={12} sm={12} className={classes.marginBlock} >
            {this.props.children}
        </Grid>
    )
  }
}
export default withStyles(styles)(GridItem)