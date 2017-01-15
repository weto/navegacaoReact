import React, { Component } from 'react';

export class PesquisaTecnologia extends Component {

  constructor(){
  	super();
  	this.state = {'campoPesquisa':''};
  	this.setCampoPesquisa = this.setCampoPesquisa.bind(this);
  }

  setCampoPesquisa(evento){
    this.setState({campoPesquisa:evento.target.value});
  }

  pesquisa(evento){
    evento.preventDefault(); 
  	this.props.callbackPesquisaTabelaTeste(this.state.campoPesquisa);
  }

  render() {
    return (
    	<div className="boxPesquisaTecnologia">
    		<form className="boxPesquisaTecnologia-form" onSubmit={this.pesquisa.bind(this)} method="post">
			    <table name="boxPesquisaTecnologiaInterna" id="boxPesquisaTecnologiaInterna" className="width100">
			      <thead>
			        <tr>
			          <th>Pesquisa de tecnologia utilizadas</th>
			        </tr>
			      </thead>
			      <tbody>
			      		<tr>
			      			<td><input type="text" placeholder="Informe a pesquisa" name="pesquisa" className="width100" value={this.state.campoPesquisa} onChange={this.setCampoPesquisa}/></td>
			      			<td className="tdBotaoPesquisa"><button className="radios4px">Pesquisar</button></td>
			      		</tr>
			      </tbody>
			    </table>
		    </form>
		</div>
    );
  }


}