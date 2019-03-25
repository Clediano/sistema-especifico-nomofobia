import React, { Component } from 'react';
import { Tooltip, Button } from '@material-ui/core';
import autoBind from 'react-autobind';
import TopBar from '../../components/TopBar';
import Layout from '../../components/Layout';
import BottomBar from '../../components/BottomBar';
import Card from '../../components/Card';
import GridContainer from '../../components/GridContainer';
import PaperContainer from '../../components/PaperContainer';
import ConfirmDialog from '../../components/ConfirmDialog';
import { carregarQuestoesFormulario, montarQuestionario, calcularPontuacaoFormulario, camposObrigatoriosPreenchidos } from '../../utils/functions';

export default class FormularioInternet extends Component {

    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            pontuacaoTotal: 0,
            respostas: {},
            perguntas: null,
            error: false
        }
    }

    async componentDidMount() {
        const perguntas = await carregarQuestoesFormulario('formulario_internet');

        this.setState({ perguntas });
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
                categoria: 'internet',
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

                    <Card cardTitle="Navegação na internet">

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
