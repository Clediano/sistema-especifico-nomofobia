import React, { Component } from 'react';
import { Tooltip, Typography, Button, Radio, FormControlLabel, FormLabel } from '@material-ui/core';
import autoBind from 'react-autobind';
import { RESPOSTA_DESEMPATE } from '../constantes/respostas';
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
import { objectToArray, sortObjectArray } from './functions';

export default class PerguntaDesempate extends Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            respDesempate: null
        }
    }

    handleChangeDesempate(e) {
        this.setState({ respDesempate: e.target.value })
    }


}

render() {

    return (
        <PaperContainer>
            <TopBar />
            <Layout>
                <Card>
                    <React.Fragment >
                        <Typography variant="h5" style={{ marginBottom: '15px' }}>
                            Formulário Desempate
                            </Typography>
                        <GridContainer>
                            <GridItem>
                                <FormLabel component="legend">1 - Com que frequência você usa o smartphone ao longo do seu dia?</FormLabel>
                                <FormControlLabel
                                    label='Não se aplica'
                                    control={<Radio color="secondary" />}
                                    checked={this.state.respDesempate === RESPOSTA_DESEMPATE.NAO_SE_APLICA}
                                    onChange={e => this.handleChangeDesempate(e)}
                                    value={RESPOSTA_DESEMPATE.NAO_SE_APLICA}
                                />
                                <FormControlLabel
                                    label='Nunca'
                                    control={<Radio color="secondary" />}
                                    checked={this.state.respDesempate === RESPOSTA_DESEMPATE.NUNCA}
                                    onChange={e => this.handleChangeDesempate(e)}
                                    value={RESPOSTA_DESEMPATE.NUNCA}
                                />
                                <FormControlLabel
                                    label='Quase nunca'
                                    control={<Radio color="secondary" />}
                                    checked={this.state.respDesempate === RESPOSTA_DESEMPATE.QUASE_NUNCA}
                                    onChange={e => this.handleChangeDesempate(e)}
                                    value={RESPOSTA_DESEMPATE.QUASE_NUNCA}
                                />
                                <FormControlLabel
                                    label='As vezes'
                                    control={<Radio color="secondary" />}
                                    checked={this.state.respDesempate === RESPOSTA_DESEMPATE.AS_VEZES}
                                    onChange={e => this.handleChangeDesempate(e)}
                                    value={RESPOSTA_DESEMPATE.AS_VEZES}
                                />
                                <FormControlLabel
                                    label='Quase sempre'
                                    control={<Radio color="secondary" />}
                                    checked={this.state.respDesempate === RESPOSTA_DESEMPATE.QUASE_SEMPRE}
                                    onChange={e => this.handleChangeDesempate(e)}
                                    value={RESPOSTA_DESEMPATE.QUASE_SEMPRE}
                                />
                                <FormControlLabel
                                    label='Sempre'
                                    control={<Radio color="secondary" />}
                                    checked={this.state.respDesempate === RESPOSTA_DESEMPATE.SEMPRE}
                                    onChange={e => this.handleChangeDesempate(e)}
                                    value={RESPOSTA_DESEMPATE.SEMPRE}
                                />
                            </GridItem>
                        </GridContainer>
                    </React.Fragment>
                    <BottomBar>
                        <Tooltip title="Clique para continuar o questionario">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleChangeDesempate}
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