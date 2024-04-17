// Importações necessárias
import React, { useState, useEffect } from 'react';  // Importa React e seus Hooks useState e useEffect.
import axios from 'axios';  // Importa a biblioteca axios para fazer requisições HTTP.

function ListDoacoes() {
    // useState é utilizado aqui para criar o estado 'doacoes', que armazena a lista de doações.
    // O estado inicial é um array vazio.
    const [doacoes, setDoacoes] = useState([]);

    // useEffect é um Hook que executa a função passada como argumento após a montagem do componente.
    useEffect(() => {
        const fetchDoacoes = async () => {
            try {
                // Faz uma requisição GET para o servidor para buscar as doações.
                const response = await axios.get('http://localhost:3000/doacoes');
                // Atualiza o estado 'doacoes' com os dados recebidos do servidor.
                setDoacoes(response.data); // Assume que a resposta inclui o campo 'nomeDoador'.
            } catch (error) {
                // Em caso de erro na requisição, exibe um alerta com a mensagem de erro.
                alert('Erro ao buscar doações: ' + error);
            }
        };

        // Chama a função fetchDoacoes para executar a requisição e buscar os dados.
        fetchDoacoes();
    }, []); // O array vazio como segundo argumento garante que o efeito ocorra apenas uma vez após o componente ser montado.

    // Renderiza o componente na tela.
    return (
        <div className="container mt-5">
            <h2>Lista de Doações</h2>
            <ul className="list-group">
                {/* Mapeia cada doação no estado 'doacoes' para um item de lista HTML */}
                {doacoes.map(doacao => (
                    <li key={doacao.codigo} className="list-group-item">
                        {/* Exibe informações da doação */}
                        {`Código: ${doacao.codigo}, Data: ${doacao.data}, Hora: ${doacao.hora}, Volume: ${doacao.volume}, Doador: ${doacao.nomeDoador}, Situação: ${doacao.situacao}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListDoacoes;  // Exporta o componente para ser usado em outras partes da aplicação.
