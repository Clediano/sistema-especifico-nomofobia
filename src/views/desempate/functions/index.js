import { firebaseDatabase } from "../../../database";

export async function buscarPerguntasDesempate(respostas) {

    let ref = firebaseDatabase.ref('formulario_desempate');
    var perguntas = [];

    for (let i = 0; i < respostas.length; i++) {
        const element = respostas[i];

        await ref.child(element.name).once('value')
            .then(snapshot => {
                const name = element.name;
                const value = snapshot.val();
                perguntas.push({ name, value });
            });
    }
    return perguntas;
}