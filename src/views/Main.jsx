import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import autoBind from 'react-autobind';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        width: 115,
        height: 115,
        backgroundColor: '#fff'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        height: 50
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});
const styled = {
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'rgb(117, 117, 117)'
    }
}


class Main extends React.Component {

    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            nome: ''
        }
    }

    componentDidMount() {
        const userLogged = window.localStorage.getItem('userLogged');

        if (userLogged) {
            this.props.history.push('/principal', { userName: userLogged });
        }
    }

    submitForm(e) {
        e.preventDefault();

        if (this.state.nome) {
            window.localStorage.setItem('userLogged', this.state.nome);

            this.props.history.push('/principal', { userName: this.state.nome });
        } else {
            window.localStorage.setItem('userLogged', 'ANONYMOUS');

            this.props.history.push('/principal', { userName: 'ANONYMOUS' });
        }
    }

    handleInputChange(e) {
        if (e.target.value && e.target.value.length > 25) {
            this.setState({
                nome: String(this.state.nome).toUpperCase()
            })
        } else {
            this.setState({
                nome: String(e.target.value).toUpperCase()
            })
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://media.istockphoto.com/vectors/social-media-addiction-concept-vector-id466397933?s=170x170"
                        className={classes.avatar}
                    />
                    <Typography
                        component="h2"
                        style={styled.title}
                        variant="subtitle1"
                    >
                        {this.state.nome ? this.state.nome : ''}
                    </Typography>

                    <form className={classes.form} onSubmit={this.submitForm}>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel>Nome</InputLabel>
                            <Input
                                placeholder="Informe seu nome ou apelido"
                                value={this.state.nome}
                                name="nome"
                                onChange={e => this.handleInputChange(e)}
                                autoFocus
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Confirmar</Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Main);
