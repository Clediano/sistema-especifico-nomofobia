import React, { Component } from 'react';
import { Tooltip, Typography, Button, Radio, FormControlLabel, FormLabel } from '@material-ui/core';
import autoBind from 'react-autobind';
import { RESPOSTAS_SMARTPHONE } from '../constantes/respostas';
import { RESPOSTAS_INTERNET } from '../constantes/respostas';
import { RESPOSTAS_FACEBOOK } from '../constantes/respostas';
import { RESPOSTAS_WHATSAPP } from '../constantes/respostas';
import TopBar from '../../../components/TopBar';
import Layout from '../../../components/Layout';
import BottomBar from '../../../components/BottomBar';
import Card from '../../../components/Card';
import GridContainer from '../../../components/GridContainer';
import PaperContainer from '../../../components/PaperContainer';
import GridItem from '../../../components/GridItem';
import { objectToArray, sortObjectArray, compareRespToTieBraker } from './functions';

export default class Principal extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            respSmartphone: null,
            respInternet: null,
            respFacebook: null,
            respWhatsApp: null
        }
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
        this.setState({ respWhatsApp: e.target.value })
    }

    handleProcessForm() {
        const objectMaped = objectToArray(this.state);
        const arrayOrdenado = sortObjectArray(objectMaped);
        const respRepetidas = compareRespToTieBraker(arrayOrdenado);
    }

    render() {

        return (
            <PaperContainer>
                <TopBar />
                <Layout>
                    <Card>
                        <React.Fragment >
                            <Typography variant="h5" style={{ marginBottom: '15px' }}>
                                Formulário Inicial
                            </Typography>
                            <GridContainer>
                                <GridItem>
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
                                </GridItem>
                                <GridItem>
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
                                </GridItem>
                                <GridItem>
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
                                </GridItem>
                                <GridItem>
                                    <FormLabel component="legend">4 - Com que frência você usa o Watsapp ao longo do seu dia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsApp === RESPOSTAS_WHATSAPP.NAO_SE_APLICA}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsApp === RESPOSTAS_WHATSAPP.NUNCA}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsApp === RESPOSTAS_WHATSAPP.QUASE_NUNCA}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsApp === RESPOSTAS_WHATSAPP.AS_VEZES}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsApp === RESPOSTAS_WHATSAPP.QUASE_SEMPRE}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.respWhatsApp === RESPOSTAS_WHATSAPP.SEMPRE}
                                        onChange={e => this.handleChangeWhatsapp(e)}
                                        value={RESPOSTAS_WHATSAPP.SEMPRE}
                                    />
                                </GridItem>
                            </GridContainer>
                        </React.Fragment>
                        <BottomBar>
                            <Tooltip title="Clique para continuar o questionario">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleProcessForm}
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

