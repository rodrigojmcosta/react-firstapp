import React from "react";

const BemVindo = (props) => {
    return(
      <div>
        <h2>Bem-vindo(a) {props.nome}</h2>
        <h3>Tenho {props.idade} anos </h3>
      </div>
    );
}


function App() {
  return(
    <div>
      Olá mundo!
      <BemVindo nome="Rodrigo" idade="21"/>
      <BemVindo nome="Wanderlúcio" idade="39"/>
    </div>
  )
}

export default App;