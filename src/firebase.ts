import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyCMI2vSskHqI6iuD5vAN9X1ncXF1NgyxwA',
        authDomain: 'iaia-app.firebaseapp.com',
        databaseURL: 'https://iaia-app.firebaseio.com',
        projectId: 'iaia-app',
        storageBucket: 'iaia-app.appspot.com',
        messagingSenderId: '311200085059',
        appId: '1:311200085059:web:43fb6e6610c8dcf5',
    });
}

export default firebase;


