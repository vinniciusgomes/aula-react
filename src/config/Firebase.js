import firebase from 'firebase';

// Importar este objeto sempre que precisarmos usar a API do Firebase.

// Configurando informações de acesso do Firebase
const config = {
    apiKey: "",
    authDomain: "react-auth-study.firebaseapp.com",
    databaseURL: "https://react-auth-study.firebaseio.com",
    projectId: "react-auth-study",
    storageBucket: "react-auth-study.appspot.com",
    messagingSenderId: ""
};

// Iniciando o app com o firebase
const fire = firebase.initializeApp(config);
export default fire;
