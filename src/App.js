import React, { Component } from 'react';

import fire from './config/Firebase';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {},
      }
    }
 
    componentDidMount() {
      this.authListener();
    }
 
   // Função para escutar o login do usuário
   authListener() {
     fire.auth().onAuthStateChanged((user) => {
       //console.log(user);
       if(user) {
         this.setState({ user });
         //localStorage.setItem('user', user.uid);
       } else {
         this.setState({ user: null });
         //localStorage.removeItem('user');
       }
     });
   }
 
   render() {
     return (
       <div className="App">
         {this.state.user ? (<Home />) : (<Login />)}
       </div>
     );
   }
 }
 
 export default App;
 