import React from 'react'
import { firebaseDatabase } from "../database";
import GridItem from "../components/GridItem";
import FormOptions from "../components/FormOptions";

export function objectToArray(form) {

    let arrayOrdened = [];

    Object.entries(form).map(el => {
        const name = el[0];
        const value = Number(el[1]);
        arrayOrdened.push({ name, value });
    });

    return arrayOrdened;
}

export function sortObjectArray(array) {
    return array.sort(compare);
}

function compare(a, b) {
    if (a.value < b.value) {
        return -1;
    }
    if (a.value > b.value) {
        return 1;
    }
    return 0;
}

export function compareRespToTieBraker(array) {
    let utimoElemento = array[array.length - 1];

    let arrayIguais = [];
    arrayIguais.push(utimoElemento);

    for (let i = (array.length - 2); i > -1; i--) {
        const element = array[i];

        if (element.value === utimoElemento.value) {
            arrayIguais.push(element);
        }
    }

    return arrayIguais;
}


export function criar(array, children) {
    let ref = firebaseDatabase.ref(`${children}`);

    array.forEach(el => {
        ref.push({ descricao: el });
    })
}

export async function carregarQuestoesFormulario(formularioNome) {
    let ref = firebaseDatabase.ref(`${formularioNome}`);

    const questionario = await ref.once('value').then(async snapshot => {
        return snapshot.val();
    });

    var result = Object.entries(questionario).map(element => {
        const name = element[0];
        const value = element[1].descricao;

        return { name, value };
    });
    return result;
}

export function calcularPontuacaoFormulario(respostas) {
    let pontuacaoTotal = 0;

    Object.keys(respostas).map(element => {
        pontuacaoTotal += Number(respostas[element])
    });

    return pontuacaoTotal;
}

export function camposObrigatoriosPreenchidos(perguntas, respostas){
    if (perguntas.length === Object.keys(respostas).length) {
        return true;
    }
    return false;
}

export function montarQuestionario(state, handleChange) {
    const { perguntas, respostas } = state;

    const result = perguntas && perguntas.map(element => {
        return (
            <GridItem key={element.name}>
                <FormOptions
                    error={!respostas[element.name]}
                    errorMessage="Campo obrigatório *"
                    question={element.value}
                    name={element.name}
                    value={respostas[element.name]}
                    handleChange={handleChange}
                />
            </GridItem>
        );
    });
    return result;
}