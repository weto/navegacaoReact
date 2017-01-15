import React, {Component} from 'react';
import {FormularioLogin} from './componentes/FormularioLogin';
import './css/estilo.css';

class App extends Component {

  render() {
    return (
      <div className="containerGeral" id="containerGeral">
          <FormularioLogin/>
      </div>
    );
  }
}

export default App;