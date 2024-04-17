// Importações necessárias: React e useState para gerenciar o estado do componente,
// o arquivo de estilos CSS para estilização e axios para fazer requisições HTTP.
import React, { useState } from 'react';
import './styles/AddDoador.css';
import axios from 'axios';

function AddDoacao() {
    // Definição de estados locais usando o hook useState para armazenar e gerenciar os valores dos campos do formulário.
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [volume, setVolume] = useState('');
    const [doadorId, setDoadorId] = useState('');

    // Função handleSubmit que será chamada quando o formulário for submetido.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário (não recarrega a página).
        try {
            // Faz uma requisição POST para o servidor usando axios para registrar uma nova doação.
            // Os dados do formulário são enviados como parte do corpo da requisição.
            const response = await axios.post('http://localhost:3000/doacoes', {
                data, hora, volume, doador: doadorId, situacao: 'ativo'
            });
            // Alerta o usuário sobre o sucesso da operação, mostrando o ID da doação registrada.
            alert('Doação registrada com sucesso: ' + response.data.doacaoId);
        } catch (error) {
            // Alerta o usuário em caso de erro durante a requisição.
            alert('Erro ao registrar doação: ' + error);
        }
    };

    // Renderização do componente: um formulário contendo campos para data, hora, volume e ID do doador.
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Registrar Doação</h2>
            <form onSubmit={handleSubmit} className="card card-body">
                <div className="form-group">
                    <label>Data</label>
                    <input type="date" className="form-control" value={data} onChange={(e) => setData(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Hora</label>
                    <input type="time" className="form-control" value={hora} onChange={(e) => setHora(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Volume</label>
                    <input type="number" className="form-control" value={volume} onChange={(e) => setVolume(e.target.value)} placeholder="Volume" required />
                </div>
                <div className="form-group">
                    <label>ID do Doador</label>
                    <input type="text" className="form-control" value={doadorId} onChange={(e) => setDoadorId(e.target.value)} placeholder="ID do Doador" required />
                </div>
                <button type="submit" className="btn btn-primary">Registrar Doação</button>
            </form>
        </div>
    );
    
}

// Exporta o componente AddDoacao para que possa ser utilizado em outras partes da aplicação.
export default AddDoacao;
