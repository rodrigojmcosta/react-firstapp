import React, { Component } from "react";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: 'masculino'
     };

     this.trocaEmail = this.trocaEmail.bind(this);
     this.trocaSexo = this.trocaSexo.bind(this);
}

trocaEmail(e) {
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado})
}

trocaSexo(e) {
  this.setState({sexo: e.target.value})
}

    render (){
      return(
        <div>
         <h2>Login</h2>
         Email: <input type="email" name="email" value={this.state.email}
                  onChange={this.trocaEmail}/> <br/>
         Senha: <input type="password" name="senha" value={this.state.senha}
                  onChange={(e) => this.setState({senha: e.target.value})}/>

         Sexo:
         <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="Masculino"> Masculino </option>
          <option value="Feminino"> Feminino </option>
         </select>
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
        </div>
        </div>
      );
    }
}

export default App;