import React, { Component } from 'react';
import { Tooltip, Button, Radio, FormControlLabel, FormLabel } from '@material-ui/core';
import autoBind from 'react-autobind';
import { RESPOSTAS } from '../../utils/respostas';
import TopBar from '../../components/TopBar';
import Layout from '../../components/Layout';
import BottomBar from '../../components/BottomBar';
import Card from '../../components/Card';
import GridContainer from '../../components/GridContainer';
import PaperContainer from '../../components/PaperContainer';
import GridItem from '../../components/GridItem';
import { objectToArray, sortObjectArray, compareRespToTieBraker } from '../../utils/functions';
import { buscarPerguntas } from './functions';
import { criar } from '../../utils/functions';
import FormOptions from '../../components/FormOptions';
import ConfirmDialog from '../../components/ConfirmDialog';

export default class Principal extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            respostas: {},
            perguntas: null,
            error: false
        }
    }

    async componentDidMount() {
        const perguntas = await buscarPerguntas();

        await this.setState({ perguntas });
    }

    handleProcessForm() {
        const { respostas, perguntas } = this.state;

        if (Object.values(respostas).length === perguntas.length) {
            const objectMaped = objectToArray(respostas);
            const arrayOrdenado = sortObjectArray(objectMaped);
            const resp = compareRespToTieBraker(arrayOrdenado);

            if (resp.length === 1) {
                this.renderizarFormulario(resp);
            } else {
                this.renderizarDesempate(resp);
            }
        } else {
            this.setState({ error: !this.state.error })
        }

    }

    montarQuestionario() {
        const { perguntas } = this.state;

        const result = perguntas && perguntas.map(element => {
            return (
                <GridItem key={element.id}>
                    <FormOptions
                        error={!this.state.respostas[element.categoria]}
                        errorMessage="Campo obrigatório *"
                        question={element.value}
                        name={element.categoria}
                        value={this.state.respostas[element.categoria]}
                        handleChange={this.handleChange}
                    />
                </GridItem>
            );
        });
        return result;
    }

    renderizarFormulario(respostas) {
        this.props.history.push(`/${respostas[0].name}`, { respostas });
    }

    renderizarDesempate(respostas) {
        this.props.history.push('/desempate', { respostas });
    }

    handleClose(){
        this.setState({ error: !this.state.error })
    }

    handleChange(e, name) {
        this.setState({
            respostas: {
                ...this.state.respostas,
                [name]: e.target.value
            }
        })
    }

    render() {
        return (
            <PaperContainer>
                <TopBar />
                <Layout>
                    <Card cardTitle="Formulário Inicial">
                        <GridContainer>
                            {this.montarQuestionario()}
                        </GridContainer>
                        <BottomBar>
                            <Tooltip title="Clique para continuar o questionário">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleProcessForm}
                                >
                                    Continuar
                                </Button>
                            </Tooltip>
                        </BottomBar>
                        <ConfirmDialog
                            dialogTitle="Atenção"
                            onClose={this.handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={this.state.error}
                            messageContent="Por favor, verifique se todas as questões foram respondidas."
                            handleConfirm={this.handleClose}
                        >
                            <Button onClick={this.handleClose} color="primary">Ok</Button>
                        </ConfirmDialog>
                    </Card>
                </Layout>
            </PaperContainer>
        );
    }
}

