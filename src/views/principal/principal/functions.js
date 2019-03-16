export function objectToArray(form) {

    let arrayOrdened = new Array();

    Object.getOwnPropertyNames(form).map(el => {
        const name = el;
        const value = form[name];
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

    let arrayIguais = new Array();
        arrayIguais.push(utimoElemento);

    for (let i = (array.length - 2); i > -1; i--) {
        const element = array[i];

        if(element.value === utimoElemento.value){
            arrayIguais.push(element);
        }
    }

    return arrayIguais;
}