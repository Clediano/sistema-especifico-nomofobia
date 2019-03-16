import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = () => ({
    root: {
        flexGrow: 1,
    },
});

class PaperContainer extends Component {
  render() {
    
    const { classes } = this.props;

    return(
        <div className={classes.root}>
            {this.props.children}
        </div>
    )
  }
}

export default withStyles(styles)(PaperContainer);