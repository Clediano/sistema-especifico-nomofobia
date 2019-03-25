import { firebaseDatabase } from "../database";

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

        if(element.value === utimoElemento.value){
            arrayIguais.push(element);
        }
    }

    return arrayIguais;
}


export function criar(array, children){
    let ref = firebaseDatabase.ref(`${children}`);

    array.forEach(el => {
        ref.push({descricao: el});
    })
}