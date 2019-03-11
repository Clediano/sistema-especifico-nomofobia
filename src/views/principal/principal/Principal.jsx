import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Dialog, DialogTitle, Button, DialogContent, DialogActions, Radio, Grid, FormControlLabel, Paper, FormLabel } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import autoBind from 'react-autobind';
import { RESPOSTAS_SMARTPHONE } from '../constantes/respostas';
import { RESPOSTAS_INTERNET } from '../constantes/respostas';
import { RESPOSTAS_FACEBOOK } from '../constantes/respostas';
import { RESPOSTAS_WHATSAPP } from '../constantes/respostas';

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
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    }
});

class Principal extends Component {
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

    handleChangeSmartphone(e) {
        this.setState({ respSmartphone: e.target.value })
    }

    handleChangeInternet(e) {
        this.setState({ respInternet: e.target.value })
    }
    handleChangeFacebook(e) {
        this.setState({ respFacebook: e.target.value })
    }

    handleChangeWhatsapp(e) {
        this.setState({ respWhatsapp: e.target.value })
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
                        <React.Fragment >
                            <Typography variant="h5" style={{ marginBottom: '15px' }} >
                                Formulário Inicial
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={12} >
                                    <FormLabel component="legend">1 - Com que frequência você usa o smartphone ao longo do seu dia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.NAO_SE_APLICA}
                                        onChange={e => this.handleChangeSmartphone(e)}
                                        value={RESPOSTAS_SMARTPHONE.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.NUNCA}
                                        onChange={e => this.handleChangeSmartphone(e)}
                                        value={RESPOSTAS_SMARTPHONE.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.QUASE_NUNCA}
                                        onChange={e => this.handleChangeSmartphone(e)}
                                        value={RESPOSTAS_SMARTPHONE.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.AS_VEZES}
                                        onChange={e => this.handleChangeSmartphone(e)}
                                        value={RESPOSTAS_SMARTPHONE.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.QUASE_SEMPRE}
                                        onChange={e => this.handleChangeSmartphone(e)}
                                        value={RESPOSTAS_SMARTPHONE.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS_SMARTPHONE.SEMPRE}
                                        onChange={e => this.handleChangeSmartphone(e)}
                                        value={RESPOSTAS_SMARTPHONE.SEMPRE}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} >
                                    <FormLabel component="legend">2 - Está ligado a internet mais tempo do que pretendia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS_INTERNET.NAO_SE_APLICA}
                                        onChange={e => this.handleChangeInternet(e)}
                                        value={RESPOSTAS_INTERNET.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS_INTERNET.NUNCA}
                                        onChange={e => this.handleChangeInternet(e)}
                                        value={RESPOSTAS_INTERNET.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS_INTERNET.QUASE_NUNCA}
                                        onChange={e => this.handleChangeInternet(e)}
                                        value={RESPOSTAS_INTERNET.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS_INTERNET.AS_VEZES}
                                        onChange={e => this.handleChangeInternet(e)}
                                        value={RESPOSTAS_INTERNET.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS_INTERNET.QUASE_SEMPRE}
                                        onChange={e => this.handleChangeInternet(e)}
                                        value={RESPOSTAS_INTERNET.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS_INTERNET.SEMPRE}
                                        onChange={e => this.handleChangeInternet(e)}
                                        value={RESPOSTAS_INTERNET.SEMPRE}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormLabel component="legend">3 - Com que frequência você usa o Facebook ao longo do seu dia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS_FACEBOOK.NAO_SE_APLICA}
                                        onChange={e => this.handleChangeFacebook(e)}
                                        value={RESPOSTAS_FACEBOOK.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS_FACEBOOK.NUNCA}
                                        onChange={e => this.handleChangeFacebook(e)}
                                        value={RESPOSTAS_FACEBOOK.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS_FACEBOOK.QUASE_NUNCA}
                                        onChange={e => this.handleChangeFacebook(e)}
                                        value={RESPOSTAS_FACEBOOK.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS_FACEBOOK.AS_VEZES}
                                        onChange={e => this.handleChangeFacebook(e)}
                                        value={RESPOSTAS_FACEBOOK.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS_FACEBOOK.QUASE_SEMPRE}
                                        onChange={e => this.handleChangeFacebook(e)}
                                        value={RESPOSTAS_FACEBOOK.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS_FACEBOOK.SEMPRE}
                                        onChange={e => this.handleChangeFacebook(e)}
                                        value={RESPOSTAS_FACEBOOK.SEMPRE}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormLabel component="legend">4 - Com que frência você usa o Watsapp ao longo do seu dia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS_WHATSAPP.NAO_SE_APLICA}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS_WHATSAPP.NUNCA}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS_WHATSAPP.QUASE_NUNCA}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS_WHATSAPP.AS_VEZES}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS_WHATSAPP.QUASE_SEMPRE}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS_WHATSAPP.SEMPRE}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.SEMPRE}
                                    />
                                </Grid>
                            </Grid>
                        </React.Fragment>
                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleNext}
                                className={classes.button}
                            >
                            Next
                            </Button>
                        </div>
                    </Paper>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Principal);
