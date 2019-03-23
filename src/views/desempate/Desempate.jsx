import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PaperContainer from '../../components/PaperContainer';
import TopBar from '../../components/TopBar';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { Typography, Tooltip, Button, FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import BottomBar from '../../components/BottomBar';
import { RESPOSTAS } from '../../utils/respostas';
import { buscarPerguntasDesempate } from './functions';
import { compareRespToTieBraker, objectToArray, sortObjectArray } from '../../utils/functions';

export default class PerguntaDesempate extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            smartphone: null,
            facebook: null,
            whatsapp: null,
            internet: null,
            respInternet: null,
            respFacebook: null,
            respWhatsapp: null,
            respSmartphone: null
        }
    }

    componentDidMount() {
        const { respostas } = this.props.location.state;

        const perguntas = buscarPerguntasDesempate(respostas);

        this.alimentarStatePerguntas(perguntas);
    }

    alimentarStatePerguntas(perguntas) {
        for (let i = 0; i < perguntas.length; i++) {

            const element = perguntas[i];

            switch (element.name) {
                case 'facebook':
                    this.setState({ facebook: element.value });
                    break;
                case 'whatsapp':
                    this.setState({ whatsapp: element.value });
                    break;
                case 'smartphone':
                    this.setState({ smartphone: element.value });
                    break;
                case 'internet':
                    this.setState({ internet: element.value });
                    break;
                default: break;
            }
        }
    }

    handleClickDesempate(e) {
        const objectMaped = objectToArray(this.state);
        const arrayOrdenado = sortObjectArray(objectMaped);
        const respostas = compareRespToTieBraker(arrayOrdenado);

        console.log(respostas)
    }

    render() {

        return (
            <PaperContainer>
                <TopBar />
                <Layout>
                    <Card>
                        <React.Fragment>
                            <Typography variant="h5" style={{ marginBottom: '15px' }}>
                                Formulário Desempate
                            </Typography>
                            <GridContainer>
                                <GridItem hidden={!this.state.smartphone}>
                                    <FormLabel component="legend">{this.state.smartphone}</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ respSmartphone: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ respSmartphone: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ respSmartphone: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ respSmartphone: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ respSmartphone: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respSmartphone === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ respSmartphone: e.target.value })}
                                        value={RESPOSTAS.SEMPRE}
                                    />
                                </GridItem>

                                <GridItem hidden={!this.state.facebook}>
                                    <FormLabel component="legend">{this.state.facebook}</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ respFacebook: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ respFacebook: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ respFacebook: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ respFacebook: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ respFacebook: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respFacebook === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ respFacebook: e.target.value })}
                                        value={RESPOSTAS.SEMPRE}
                                    />
                                </GridItem>

                                <GridItem hidden={!this.state.whatsapp}>
                                    <FormLabel component="legend">{this.state.whatsapp}</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ respWhatsapp: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ respWhatsapp: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ respWhatsapp: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ respWhatsapp: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ respWhatsapp: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsapp === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ respWhatsapp: e.target.value })}
                                        value={RESPOSTAS.SEMPRE}
                                    />
                                </GridItem>

                                <GridItem hidden={!this.state.internet}>
                                    <FormLabel component="legend">{this.state.internet}</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ respInternet: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ respInternet: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ respInternet: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ respInternet: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ respInternet: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respInternet === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ respInternet: e.target.value })}
                                        value={RESPOSTAS.SEMPRE}
                                    />
                                </GridItem>
                            </GridContainer>
                        </React.Fragment>
                        <BottomBar>
                            <Tooltip title="Clique para continuar o questionário">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickDesempate}
                                >
                                    Próximo
                            </Button>
                            </Tooltip>
                        </BottomBar>
                    </Card>
                </Layout>
            </PaperContainer>
        );
    }
}