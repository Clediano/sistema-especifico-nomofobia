import { firebaseDatabase } from '../../../database/index';

function buscarFormularioRespostas(nomeFormulario) {
    return `conhecimento_${nomeFormulario}`;
}

export async function buscarResposta(categoria, pontuacao) {

    const formularioNome = buscarFormularioRespostas(categoria);

    let ref = firebaseDatabase.ref(`${formularioNome}`);

    const conhecimento = await ref.once('value').then(snapshot => {
        const questionario = snapshot.val();

        return questionario && Object.entries(questionario).map(element => {
            return { [element[0]]: element[1] }
        });
    });

    if (pontuacao <= 50) {
        return conhecimento[0];
    } else if (pontuacao <= 75) {
        return conhecimento[1];
    } else if (pontuacao < 99) {
        return conhecimento[2];
    } else {
        return conhecimento[3];
    }
}
