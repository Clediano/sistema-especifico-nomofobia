import React, { Component } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

export default class GridContainer extends Component {
  render() {

    const{ perguntas } = this.props;

    return(
        <Grid container spacing={24}>
            {!perguntas ? <CircularProgress /> : this.props.children}
        </Grid>
    )
  }
}
