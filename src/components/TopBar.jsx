import React, { Component } from 'react';
import { Toolbar, AppBar, Typography, Tooltip, IconButton, withStyles, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import autoBind from 'react-autobind';
import { ExitToApp } from '@material-ui/icons';
import { withRouter } from "react-router";

const styles = () => ({
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

class TopBar extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            open: false,
            userLogged: '',
            respSmartphone: null,
            respInternet: null,
            respFacebook: null
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
            <AppBar position="static" color="default">
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
                <Toolbar className={classes.toolbar}>
                    <Tooltip title="Clique para reiniciar o teste">
                        <Typography
                            variant="h5"
                            onClick={() => this.props.history.push('/principal')}
                            color="textSecondary"
                            style={{ cursor: 'pointer' }}
                        >Nomofobia</Typography>
                    </Tooltip>
                    <Typography variant="h5" color="textSecondary">{this.state.userLogged}</Typography>
                    <Tooltip title="Clique para sair do sistema">
                        <IconButton
                            onClick={this.handleClose}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <ExitToApp />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        )
    }
}
export default withStyles(styles)(withRouter(TopBar));
