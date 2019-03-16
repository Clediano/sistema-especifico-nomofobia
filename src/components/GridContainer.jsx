import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export default class GridContainer extends Component {
  render() {
    
    return(
        <Grid container spacing={24}>
            {this.props.children}
        </Grid>
    )
  }
}
