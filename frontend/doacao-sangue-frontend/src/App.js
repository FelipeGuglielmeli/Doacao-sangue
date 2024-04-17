// Importa a biblioteca React para usar JSX e funcionalidades do React no componente.
import React from 'react';
// Importa os componentes de outras partes da aplicação, permitindo que sejam usados neste componente principal.
import AddDoador from './components/AddDoador';
import AddDoacao from './components/AddDoacao';
import ListDoacoes from './components/ListDoacoes';

function App() {
  // A função do componente App retorna JSX, que descreve a estrutura da interface do usuário que será renderizada no navegador.
  return (
    <div className="App">
      <h1>Sistema de Doação de Sangue</h1> 
      <AddDoador /> 
      <AddDoacao /> 
      <ListDoacoes /> 
    </div>
  );
}

export default App; // Exporta o componente App para que possa ser usado em outras partes da aplicação, como no ponto de entrada principal.
