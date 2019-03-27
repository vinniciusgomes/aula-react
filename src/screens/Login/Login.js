import React, { Component } from 'react';

import fire from '../../config/Firebase';
import '../../assets/css/styles.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }   
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email.trim(), this.state.password).then((u) =>{
        }).catch((error) =>{
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
            <form>
                <div className="container" align="center">
                    <div className="row">
                        <div className="col-12">
                            <img className="img-fluid logo" src="https://vife.dev/assets/images/logo.png" />
                            <div className="card card-container" align="left">
                                <div className="card-body login-card">
                                    <p className="text-center login-text" style={{marginTop: 30}}>Login</p>
                                    <div className="container-input">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group bmd-form-group">
                                                    <label className="bmd-label-floating">E-mail</label>
                                                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group bmd-form-group">
                                                    <label className="bmd-label-floating">Senha</label>
                                                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container" align="center">
                                           <button type="submit" onClick={this.login} className="btn btn-primary button">ENTRAR</button>
                                           <br /><br />
                                           <button type="button" onClick={this.signup} className="btn btn-default btn-link">CADASTRAR</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}

export default Login;
