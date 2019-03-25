import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PaperContainer from '../../components/PaperContainer';
import TopBar from '../../components/TopBar';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { Tooltip, Button, FormLabel, Radio, FormControlLabel } from '@material-ui/core';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import BottomBar from '../../components/BottomBar';

export default class PerguntaDesempate extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            resposta: null,
            dependencias: null
        }
    }

    async componentDidMount() {
        const { respostas } = this.props.location.state;

        await this.setState({
            dependencias: respostas,
            resposta: String(respostas[0].name).toUpperCase()
        });
    }

    renderizarOpcoes() {
        const { dependencias } = this.state;

        const result = dependencias && dependencias.map(element => {
            switch (element.name) {
                case "facebook": {
                    return (
                        <FormControlLabel
                            label='Facebook'
                            key="facebook"
                            control={<Radio color="secondary" />}
                            checked={this.state.resposta === 'FACEBOOK'}
                            onChange={e => this.setState({ resposta: e.target.value })}
                            value='FACEBOOK'
                        />
                    );
                }
                case "whatsapp": {
                    return (
                        <FormControlLabel
                            label='WhatsApp'
                            key="whatsapp"
                            control={<Radio color="secondary" />}
                            checked={this.state.resposta === 'WHATSAPP'}
                            onChange={e => this.setState({ resposta: e.target.value })}
                            value='WHATSAPP'
                        />
                    );
                }
                case "internet": {
                    return (
                        <FormControlLabel
                            label='Navegação'
                            key="internet"
                            control={<Radio color="secondary" />}
                            checked={this.state.resposta === 'INTERNET'}
                            onChange={e => this.setState({ resposta: e.target.value })}
                            value='INTERNET'
                        />
                    );
                }
                case "smartphone": {
                    return (
                        <FormControlLabel
                            label='Smartphone'
                            key="smartphone"
                            control={<Radio color="secondary" />}
                            checked={this.state.resposta === 'SMARTPHONE'}
                            onChange={e => this.setState({ resposta: e.target.value })}
                            value='SMARTPHONE'
                        />
                    );
                }
                default: break;
            }
        });
        return result;
    }

    handleClickDesempate() {
        this.props.history.push(`${String(this.state.resposta).toLowerCase()}`);
    }

    handleChange(e, name) {
        this.setState({
            resposta: {
                [name]: e.target.value
            }
        });
    }

    render() {
        return (
            <PaperContainer>
                <TopBar />
                <Layout>
                    <Card cardTitle="Formulário Desempate">
                        <GridContainer perguntas={this.state.resposta}>
                            <GridItem hidden={false}>
                                <FormLabel component="legend">Quais das opções abaixo você se considera mais dependente?</FormLabel>
                                {this.renderizarOpcoes()}
                            </GridItem>
                        </GridContainer>

                        <BottomBar>
                            <Tooltip title="Clique para submeter o formulário">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickDesempate}
                                > Próximo </Button>
                            </Tooltip>
                        </BottomBar>

                    </Card>
                </Layout>
            </PaperContainer>
        );
    }
}