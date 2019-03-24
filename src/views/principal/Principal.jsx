import React, { Component } from 'react';
import { Tooltip, Typography, Button, Radio, FormControlLabel, FormLabel } from '@material-ui/core';
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

export default class Principal extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            smartphone: null,
            internet: null,
            facebook: null,
            whatsapp: null,
        }
    }

    handleProcessForm() {
        const objectMaped = objectToArray(this.state);
        const arrayOrdenado = sortObjectArray(objectMaped);
        const respostas = compareRespToTieBraker(arrayOrdenado);

        if (respostas.length === 1) {
            this.renderizarFormulario(respostas)
        } else {
            this.renderizarDesempate(respostas);
        }
    }

    renderizarFormulario(respostas) {
        this.props.history.push(`/${respostas.name}`, { respostas });
    }

    renderizarDesempate(respostas) {
        this.props.history.push('/desempate', { respostas });
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
                                        checked={this.state.smartphone === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ smartphone: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.smartphone === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ smartphone: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.smartphone === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ smartphone: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.smartphone === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ smartphone: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.smartphone === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ smartphone: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.smartphone === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ smartphone: e.target.value })}
                                        value={RESPOSTAS.SEMPRE}
                                    />
                                </GridItem>
                                <GridItem>
                                    <FormLabel component="legend">2 - Está ligado a internet mais tempo do que pretendia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.internet === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ internet: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.internet === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ internet: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.internet === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ internet: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.internet === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ internet: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.internet === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ internet: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.internet === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ internet: e.target.value })}
                                        value={RESPOSTAS.SEMPRE}
                                    />
                                </GridItem>
                                <GridItem>
                                    <FormLabel component="legend">3 - Com que frequência você usa o Facebook ao longo do seu dia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.facebook === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ facebook: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.facebook === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ facebook: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.facebook === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ facebook: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.facebook === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ facebook: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.facebook === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ facebook: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.facebook === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ facebook: e.target.value })}
                                        value={RESPOSTAS.SEMPRE}
                                    />
                                </GridItem>
                                <GridItem>
                                    <FormLabel component="legend">4 - Com que frência você usa o Watsapp ao longo do seu dia?</FormLabel>
                                    <FormControlLabel
                                        label='Não se aplica'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.whatsapp === RESPOSTAS.NAO_SE_APLICA}
                                        onChange={e => this.setState({ whatsapp: e.target.value })}
                                        value={RESPOSTAS.NAO_SE_APLICA}
                                    />
                                    <FormControlLabel
                                        label='Nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.whatsapp === RESPOSTAS.NUNCA}
                                        onChange={e => this.setState({ whatsapp: e.target.value })}
                                        value={RESPOSTAS.NUNCA}
                                    />
                                    <FormControlLabel
                                        label='Quase nunca'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.whatsapp === RESPOSTAS.QUASE_NUNCA}
                                        onChange={e => this.setState({ whatsapp: e.target.value })}
                                        value={RESPOSTAS.QUASE_NUNCA}
                                    />
                                    <FormControlLabel
                                        label='As vezes'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.whatsapp === RESPOSTAS.AS_VEZES}
                                        onChange={e => this.setState({ whatsapp: e.target.value })}
                                        value={RESPOSTAS.AS_VEZES}
                                    />
                                    <FormControlLabel
                                        label='Quase sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.whatsapp === RESPOSTAS.QUASE_SEMPRE}
                                        onChange={e => this.setState({ whatsapp: e.target.value })}
                                        value={RESPOSTAS.QUASE_SEMPRE}
                                    />
                                    <FormControlLabel
                                        label='Sempre'
                                        control={<Radio color="secondary" />}
                                        checked={this.state.whatsapp === RESPOSTAS.SEMPRE}
                                        onChange={e => this.setState({ whatsapp: e.target.value })}
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

