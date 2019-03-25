import { firebaseDatabase } from '../../../database/index';

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
