import React, { Component } from 'react';
import { Tooltip, Typography, Button, FormLabel } from '@material-ui/core';
import autoBind from 'react-autobind';
import TopBar from '../../components/TopBar';
import Layout from '../../components/Layout';
import BottomBar from '../../components/BottomBar';
import Card from '../../components/Card';
import GridContainer from '../../components/GridContainer';
import PaperContainer from '../../components/PaperContainer';
import { Options } from './respFormBasic/index';
import GridItem from '../../components/GridItem';

export default class FormularioFacebook extends Component {

    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            pontuacaoTotal: 0,
        }
    }

    handleChange(e, name) {
        this.setState({
            ...this.state,
            [name]: e.target.value
        });
    }

    render() {
        return (
            <PaperContainer>
                <TopBar />
                <Layout>
                    <Card>
                        <React.Fragment>
                            <Typography variant="h5" style={{ marginBottom: '15px' }}>
                                Formulário Facebook
                            </Typography>
                            <GridContainer>
                                <GridItem>
                                    <FormLabel component="legend"> 1 - AOSHDKJASHDKJASHKDJHASKDJHASKJDHASKJDHAKSJHDKASJHDKJA?</FormLabel>
                                    <Options
                                        name="pergunta1"
                                        value={this.state.pergunta1}
                                        handleChange={this.handleChange}
                                    />
                                </GridItem>
                            </GridContainer>
                        </React.Fragment>
                        <BottomBar>
                            <Tooltip title="Clique para continuar o questionario">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => console.log(this.state.pontuacaoTotal)}
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
