import React, { Component } from 'react';
//import $ from 'jquery';


export class FormularioLogin extends Component {

  constructor(){
    super();
    this.state = {login:'', senha:''} ; 
    this.setLogin = this.setLogin.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  loginSistema(evento){
    evento.preventDefault(); 
    if(this.state.login==="teste" && this.state.senha==="teste"){
      document.cookie = true;
      window.location.href = "http://localhost:3000/tecnologias";
    }
  }

  logoutSistema(evento){
    evento.preventDefault(); 
  }

  setLogin(evento){
    this.setState({login:evento.target.value});
  }

  setSenha(evento){
    this.setState({senha:evento.target.value});
  }

  componentDidMount(){

  }

  componentWillMount(){
    if((document.cookie.indexOf("true")===0)){
      window.location.href = "http://localhost:3000/tecnologias";
    }
  }

  render() {
    return (
      <div className="containerLogin">
          <div className="login-page">
            <div className="cabecalho">Login Form</div>
            <div className="form">
              <form className="login-form" onSubmit={this.loginSistema.bind(this)} method="post">
                <input type="text" id="Username" placeholder="Username" className="radios4px" value={this.state.login} onChange={this.setLogin}/>
                <input type="password" placeholder="Password" className="radios4px" value={this.state.senha} onChange={this.setSenha}/>
                <div className="cantainer-externo">          
                  <p className="message">Lost Your password?</p>

                  <div className="login-button">
                    <button className="radios4px">Sign In</button>
                  </div>
                  <p className="message">Usuário e Senha: teste</p>
                </div>
              </form>
            </div>
          </div>
      </div>
      );
  };


}