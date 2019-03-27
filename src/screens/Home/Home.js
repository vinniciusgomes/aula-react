import React, { Component } from 'react';

import fire from '../../config/Firebase';
import { throws } from 'assert';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
  
    logout(){
        fire.auth().signOut();
    }
  
    render() {
      return (
          <div>
              <h1>Você está na home</h1>
              <button onClick={this.logout}>Sair</button>
          </div>
      );
    }
  }
  