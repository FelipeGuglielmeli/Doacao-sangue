// Importações necessárias para o componente.
import React, { useState } from 'react'; // Importa o React e o Hook useState para gerenciamento de estado.
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP.

function AddDoador() {
    // Hooks useState para cada campo do formulário, armazenando e atualizando os estados.
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [contato, setContato] = useState('');
    const [tipoSanguineo, setTipoSanguineo] = useState('A');
    const [rh, setRh] = useState('positivo');
    const [tipoERhCorretos, setTipoERhCorretos] = useState(true);

    // Função handleSubmit é chamada quando o formulário é submetido.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário, que recarregaria a página.
        try {
            // Realiza uma requisição POST para o servidor, enviando os dados do doador para serem salvos no banco de dados.
            const response = await axios.post('http://localhost:3000/doadores', {
                nome, cpf, contato, tipo_sanguineo: tipoSanguineo, rh, tipo_e_rh_corretos: tipoERhCorretos, situacao: 'ativo'
            });
            // Alerta o usuário que o doador foi adicionado com sucesso, mostrando o ID do novo doador.
            alert('Doador adicionado com sucesso: ' + response.data.doadorId);
        } catch (error) {
            // Alerta o usuário em caso de erro durante a requisição.
            alert('Erro ao adicionar doador: ' + error);
        }
    };

    // Renderiza o formulário na tela.
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Adicionar Doador</h2>
            <form onSubmit={handleSubmit} className="card card-body">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
                </div>
                <div className="form-group">
                    <label>CPF</label>
                    <input type="text" className="form-control" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" required />
                </div>
                <div className="form-group">
                    <label>Contato</label>
                    <input type="text" className="form-control" value={contato} onChange={(e) => setContato(e.target.value)} placeholder="Contato" required />
                </div>
                <div className="form-group">
                    <label>Tipo Sanguíneo</label>
                    <select className="form-control" value={tipoSanguineo} onChange={(e) => setTipoSanguineo(e.target.value)}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Fator RH</label>
                    <select className="form-control" value={rh} onChange={(e) => setRh(e.target.value)}>
                        <option value="positivo">Positivo</option>
                        <option value="negativo">Negativo</option>
                    </select>
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" checked={tipoERhCorretos} onChange={(e) => setTipoERhCorretos(e.target.checked)} />
                    <label className="form-check-label">Tipo e RH corretos?</label>
                </div>
                <button type="submit" className="btn btn-success">Adicionar Doador</button>
            </form>
        </div>
    );
}

export default AddDoador; // Exporta o componente para que possa ser utilizado em outras partes da aplicação.
