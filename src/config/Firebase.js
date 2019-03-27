import firebase from 'firebase';

// Importar este objeto sempre que precisarmos usar a API do Firebase.

// Configurando informações de acesso do Firebase
const config = {
    apiKey: "AIzaSyDjtR5MtMX98Rnh35N09bftgSfxIhQSDeQ",
    authDomain: "react-auth-study.firebaseapp.com",
    databaseURL: "https://react-auth-study.firebaseio.com",
    projectId: "react-auth-study",
    storageBucket: "react-auth-study.appspot.com",
    messagingSenderId: "558660457976"
};

// Iniciando o app com o firebase
const fire = firebase.initializeApp(config);
export default fire;