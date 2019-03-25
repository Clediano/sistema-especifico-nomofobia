import React, { Component } from 'react';
import { Tooltip, Button, Grid, Typography } from '@material-ui/core';
import autoBind from 'react-autobind';
import TopBar from '../../components/TopBar';
import Layout from '../../components/Layout';
import BottomBar from '../../components/BottomBar';
import Card from '../../components/Card';
import PaperContainer from '../../components/PaperContainer';
import { buscarResposta } from './functions';

class Resultado extends Component {

    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            resposta: ""
        }
    }

    async componentDidMount() {
        const { categoria, pontuacao } = this.props.location.state;

        const resposta = await buscarResposta(categoria, pontuacao);

        this.setState({ resposta: Object.values(resposta)[0] });
    }

    render() {

        return (
            <PaperContainer>

                <TopBar />

                <Layout>
                    <Card cardTitle="Resultado">

                        <Typography component="p" align="justify" style={{ padding: '25px' }}>
                            {this.state.resposta}
                        </Typography>

                        <BottomBar>
                            <Tooltip title="Clique para iniciar um novo teste">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.props.history.push('/principal')}
                                >
                                    Refazer
                                </Button>
                            </Tooltip>
                        </BottomBar>

                    </Card>
                </Layout>

            </PaperContainer>
        );
    }
}
export default Resultado