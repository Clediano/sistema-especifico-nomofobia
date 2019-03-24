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
import { firebaseDatabase } from '../../database';
import FormOptions from '../../components/FormOptions';
import ConfirmDialog from '../../components/ConfirmDialog';

export default class FormularioFacebook extends Component {

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

    componentDidMount() {

        let ref = firebaseDatabase.ref('formulario_facebook');

        ref.once('value').then(async snapshot => {
            const questionario = snapshot.val();

            var result = Object.entries(questionario).map(element => {
                const name = element[0];
                const value = element[1].descricao;

                return { name, value };
            });
            await this.setState({ perguntas: result });
        });
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
        let pontuacaoTotal = 0;

        if (perguntas.length === Object.keys(respostas).length) {
            Object.keys(respostas).map(element => {
                pontuacaoTotal += Number(respostas[element])
            });
            this.setState({ pontuacaoTotal });
        } else {
            this.setState({ error: !this.state.error })
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
                    <Card cardTitle="Formulário Facebook">
                    
                        <GridContainer>
                            {this.montarQuestionario()}
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
