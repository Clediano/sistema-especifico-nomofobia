import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(800 + theme.spacing.unit * 2 * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

class Layout extends Component {
  render() {
    
    const { classes } = this.props;

    return(
        <main className={classes.layout}>
            {this.props.children}
        </main>
    )
  }
}

export default withStyles(styles)(Layout);