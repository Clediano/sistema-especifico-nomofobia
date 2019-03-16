import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = () => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

class BottomBar extends Component {
  render() {
    
    const { classes } = this.props;

    return(
        <div className={classes.buttons}>
            {this.props.children}
        </div>
    )
  }
}

export default withStyles(styles)(BottomBar);