import React, { Component } from 'react';
import {TabelaTecnologias} from './TabelaTecnologias';

export class BoxPesquisaTabela extends Component {

  constructor(){
    super();
    this.sair = this.sair.bind(this);
  }

  sair(evento){
    evento.preventDefault(); 
    document.cookie = -1;
    window.location.href = "http://localhost:3000";
  }

  componentWillMount(){
    if(!(document.cookie.indexOf("true")===0)){
      window.location.href = "http://localhost:3000";
    }
  }


  render() {
    return (
    	<div className="login-page">
          <div>
            <div className="cabecalho">Seja bem vindo <div id="sair" onClick={this.sair.bind(this)} >x</div></div>
            <TabelaTecnologias />
		      </div>
      </div>
    );
  }
}