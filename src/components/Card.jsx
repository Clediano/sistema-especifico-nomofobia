import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    typograthy: {
        marginBottom: '55px'
    }
});

class Card extends Component {
    render() {

        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.typograthy}>
                    {this.props.cardTitle}
                </Typography>
                {this.props.children}
            </Paper>
        )
    }
}

export default withStyles(styles)(Card);