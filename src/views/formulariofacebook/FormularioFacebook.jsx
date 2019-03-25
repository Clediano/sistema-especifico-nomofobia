import React, { Component } from 'react';
import { Tooltip, Button } from '@material-ui/core';
import autoBind from 'react-autobind';
import TopBar from '../../components/TopBar';
import Layout from '../../components/Layout';
import BottomBar from '../../components/BottomBar';
import Card from '../../components/Card';
import GridContainer from '../../components/GridContainer';
import PaperContainer from '../../components/PaperContainer';
import GridItem from '../../components/GridItem';
import FormOptions from '../../components/FormOptions';
import ConfirmDialog from '../../components/ConfirmDialog';

import {
    carregarQuestoesFormulario,
    calcularPontuacaoFormulario,
    camposObrigatoriosPreenchidos,
    montarQuestionario
} from '../../utils/functions';

const FORMULARIO_NOME = 'formulario_facebook';
const FORMULARIO_CATEGORIA = 'facebook';
const CARD_TITLE = 'Facebook';

export default class FormularioFacebook extends Component {

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
        const perguntas = await carregarQuestoesFormulario(FORMULARIO_NOME);

        this.setState({ perguntas });
    }

    montarQuestionario() {
        const { perguntas } = this.state;

        const result = perguntas && perguntas.map(element => {
            return (
                <GridItem key={element.name}>
                    <FormOptions
                        error={!this.state.respostas[element.name]}
                        errorMessage="Campo obrigatório *"
                        question={element.value}
                        name={element.name}
                        value={this.state.respostas[element.name]}
                        handleChange={this.handleChange}
                    />
                </GridItem>
            );
        });
        return result;
    }

    handleChange(e, name) {
        this.setState({
            ...this.state,
            respostas: {
                ...this.state.respostas,
                [name]: e.target.value
            }
        });
    }

    calcularPontuacao() {

        const { respostas, perguntas } = this.state;

        let pontuacaoTotal = calcularPontuacaoFormulario(respostas);

        if (camposObrigatoriosPreenchidos(perguntas, respostas)) {
            this.props.history.push('/resultado', {
                categoria: FORMULARIO_CATEGORIA,
                pontuacao: pontuacaoTotal
            });
        } else {
            this.handleClose();
        }
    }

    handleClose() {
        this.setState({ error: !this.state.error });
    }

    render() {
        return (
            <PaperContainer>

                <TopBar />

                <Layout>

                    <Card cardTitle={CARD_TITLE}>

                        <GridContainer>
                            {montarQuestionario(this.state, this.handleChange)}
                        </GridContainer>

                        <BottomBar>
                            <Tooltip title="Clique receber o resultado do teste">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.calcularPontuacao()}
                                >
                                    Responder
                                </Button>
                            </Tooltip>
                        </BottomBar>

                    </Card>

                </Layout>

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

            </PaperContainer>
        );
    }
}
