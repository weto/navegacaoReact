import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BoxPesquisaTabela} from './componentes/BoxPesquisaTabela';

import './index.css';
import {Router,Route,browserHistory} from 'react-router';

ReactDOM.render(
	(
		<Router history={browserHistory}>
			<Route path="/" component={App} />
			<Route path="/tecnologias" component={BoxPesquisaTabela} />
		</Router>
	),
  document.getElementById('root')
);
