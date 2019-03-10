import { firebaseDatabase } from '../../../database';

export default class FirebaseService {
    static getInitialQuestions = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        
        query.on('value', dataSnapshot => {
            let items = [];

            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                items.push(item);
            });

            callback(items);

        }, err => {
            console.log(err);
        });

        return query;
    };
}