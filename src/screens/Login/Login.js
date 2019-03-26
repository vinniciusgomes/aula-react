import React from 'react';
import { Link } from 'react-router-dom';

import Textfield from '../../components/Textfield/Textfield';

import '../../assets/css/styles.css'

export default () => {
    return (
        <>
            <form method="get">
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
                                                <Textfield className="input-login" type="email" name="email" inputName="E-mail" />
                                            </div>
                                            <div className="col-12">
                                                <Textfield className="input-login" type="password" name="senha" inputName="Senha" />
                                            </div>
                                        </div>
                                        <div className="container" align="center">
                                            <Link to="/home"><button type="button" className="btn btn-primary button">ENTRAR</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
