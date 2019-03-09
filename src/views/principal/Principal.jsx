import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Dialog, DialogTitle, Button, DialogContent, DialogActions } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import autoBind from 'react-autobind';

const styles = {
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
};

class Principal extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            open: false,
            userLogged: ''
        }
    }

    componentDidMount() {
        const userLogged = window.localStorage.getItem('userLogged');

        if (userLogged) {
            this.setState({ userLogged });
        } else {
            this.setState({ userLogged: 'ANONYMOUS' });
        }
    }

    handleClose() {
        this.setState({ open: !this.state.open });
    }

    handleConfirm() {
        window.localStorage.removeItem('userLogged');

        this.props.history.push('/');
    }

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                >
                    <DialogTitle>Confirmação</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            Tem certeza que deseja sair do sistema? Você será redirecionado para a tela inicial.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleConfirm} color="primary">Sim</Button>
                        <Button onClick={this.handleClose} color="secondary">Não</Button>
                    </DialogActions>
                </Dialog>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h5" color="textSecondary">Monofobia</Typography>
                        <Typography variant="h5" color="textSecondary">{this.state.userLogged}</Typography>
                        <IconButton
                            onClick={this.handleClose}
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <ExitToApp />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Principal);
