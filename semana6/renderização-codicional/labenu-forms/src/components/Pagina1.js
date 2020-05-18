import React from "react";

class Pagina1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input />
        <p>2. Qual sua idade?</p>
        <input />
        <p>3. Qual seu e-mail?</p>
        <input />
        <p>4. Qual a sua escolaridade?</p>
        <p>
          <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
          </select>
        </p>
        <button onClick={this.props.proximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}

export default Pagina1;