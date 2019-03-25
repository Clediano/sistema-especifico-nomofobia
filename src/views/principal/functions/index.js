import React from 'react';
import { firebaseDatabase } from '../../../database/index';
import GridItem from '../../../components/GridItem';
import FormOptions from '../../../components/FormOptions';

export async function buscarPerguntas() {

    let ref = firebaseDatabase.ref('formulario_inicial');
    let perguntas = [];

    const questoes = await ref.once('value').then(snapshot => {
        return snapshot.val();
    });

    Object.entries(questoes).map(element => {
        const id = element[0];
        const value = element[1].descricao;
        const categoria = element[1].categoria;
        perguntas.push({ id, value, categoria });
    });
    return perguntas;
}

export function montarQuestionarioPrincipal(state, handleChange) {
    
    const { perguntas, respostas } = state;

    const result = perguntas && perguntas.map(element => {
        return (
            <GridItem key={element.id}>
                <FormOptions
                    error={!respostas[element.categoria]}
                    errorMessage="Campo obrigatório *"
                    question={element.value}
                    name={element.categoria}
                    value={respostas[element.categoria]}
                    handleChange={handleChange}
                />
            </GridItem>
        );
    });
    return result;
}