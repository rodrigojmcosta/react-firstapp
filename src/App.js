import React, { Component } from "react";

class Equipe extends Component {
  render(){
    return(
      <div>
        <Sobre nome ={this.props.nome} cargo={this.props.cargo} 
             idade={this.props.idade}/>
      <Social/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá sou o {this.props.nome} </h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
        <hr/>
      </div>
    );
  }
}

const Social = () => {
  return(
    <div>
      <a>Facebook </a>
      <a>LinkedIn </a>
    </div>
  );
}

function App() {
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Rodrigo" cargo="Desenvolvedor" idade="24"/>
      <Equipe nome="Lucas" cargo="Designer" idade="19"/>
    </div>
  )
}

export default App;