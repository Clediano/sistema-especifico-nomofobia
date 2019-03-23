import { firebaseDatabase } from "../../../database";

export function buscarPerguntasDesempate(respostas) {
    let ref = firebaseDatabase.ref('formulario_desempate');
    let perguntas = [];

    for (let i = 0; i < respostas.length; i++) {
        const element = respostas[i];

        ref.child(element.name).on('value', snapshot => {
            const name = element.name;
            const value = snapshot.val();
            perguntas.push({ name, value });
        });
    }
    return perguntas;
}