import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Dialog, DialogTitle, Button, DialogContent, DialogActions, Radio, Grid, FormControlLabel, Checkbox, Paper, FormLabel } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import autoBind from 'react-autobind';
import { RESPOSTAS_SMARTPHONE } from './constantes/respostas';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(800 + theme.spacing.unit * 2 * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
});

class Principal extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            open: false,
            userLogged: '',
            respSmartphone: null
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

    handleChangeRadio(e) {
        this.setState({ respSmartphone: e.target.value })
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
                        <Typography variant="h5" color="textSecondary">Nomofobia</Typography>
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
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <React.Fragment>
                            <Typography variant="h5" style={{ marginBottom: '15px' }} >
                                Formulário Inicial
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={12}>
                                    <FormLabel component="legend">1 - Com que frequência você usa o smartphone ao longo do seu dia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.NAO_SE_APLICA}
                                        onChange={e => this.handleChangeRadio(e)}
                                        value={RESPOSTAS_SMARTPHONE.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.NUNCA}
                                        onChange={e => this.handleChangeRadio(e)}
                                        value={RESPOSTAS_SMARTPHONE.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.QUASE_NUNCA}
                                        onChange={e => this.handleChangeRadio(e)}
                                        value={RESPOSTAS_SMARTPHONE.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.AS_VEZES}
                                        onChange={e => this.handleChangeRadio(e)}
                                        value={RESPOSTAS_SMARTPHONE.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.QUASE_SEMPRE}
                                        onChange={e => this.handleChangeRadio(e)}
                                        value={RESPOSTAS_SMARTPHONE.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.SEMPRE}
                                        onChange={e => this.handleChangeRadio(e)}
                                        value={RESPOSTAS_SMARTPHONE.SEMPRE}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                </Grid>
                                <Grid item xs={12}>

                                </Grid>
                                <Grid item xs={12}>

                                </Grid>



                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                        label="Use this address for payment details"
                                    />
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Principal);
