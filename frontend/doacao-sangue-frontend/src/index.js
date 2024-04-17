// Importa o módulo React para possibilitar o uso de JSX e outros recursos do React.
import React from 'react';
// Importa ReactDOM para permitir a manipulação e interação com o DOM na web.
import ReactDOM from 'react-dom/client';
// Importa o arquivo de estilos CSS principal para a aplicação.
import './index.css';
// Importa os estilos do Bootstrap para utilizar seus componentes e classes de estilo pré-definidos.
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa o componente App, que é o componente raiz da aplicação.
import App from './App';
// Importa a função reportWebVitals, que pode ser usada para medir e analisar o desempenho da aplicação.
import reportWebVitals from './reportWebVitals';

// Cria uma referência ao elemento root do DOM usando ReactDOM e atribui a uma variável.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Inicia o render do componente App no elemento root no modo estrito.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// A função reportWebVitals pode ser usada para monitorar métricas de desempenho.
// Aqui está sendo chamada sem argumentos, mas pode ser configurada para logar resultados
// ou enviar para um endpoint de análise conforme o exemplo comentado.
reportWebVitals();
