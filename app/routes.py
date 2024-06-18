from flask import Blueprint, jsonify, request
from .models import Doador, Doacao
from . import db

main = Blueprint('main', __name__)

@main.route('/doadores', methods=['GET'])
def get_doadores():
    doadores = Doador.query.all()
    doadores_list = [
        {'id': doador.id, 'nome': doador.nome}
        for doador in doadores
    ]
    return jsonify(doadores_list)


@main.route('/doacoes', methods=['GET'])
def get_doacoes():
    nome_doador = request.args.get('nome')
    data_inicio = request.args.get('data_inicio')
    data_fim = request.args.get('data_fim')

    query = Doacao.query.join(Doador).with_entities(
        Doacao.volume, Doador.nome, Doacao.data, Doacao.hora
    )

    if nome_doador:
        query = query.filter(Doador.nome.ilike(f'%{nome_doador}%'))

    if data_inicio:
        query = query.filter(Doacao.data >= data_inicio)

    if data_fim:
        query = query.filter(Doacao.data <= data_fim)

    doacoes = query.all()
    doacoes_list = [
        {
            'volume': doacao.volume,
            'doador': doacao.nome,
            'data': doacao.data.strftime('%Y-%m-%d'),
            'hora': doacao.hora.strftime('%H:%M:%S')
        }
        for doacao in doacoes
    ]
    return jsonify(doacoes_list)


@main.route('/doadores', methods=['POST'])
def create_doador():
    data = request.get_json()
    novo_doador = Doador(
        nome=data['nome'],
        cpf=data['cpf'],
        contato=data['contato'],
        tipo_sanguineo=data['tipo_sanguineo'],
        rh=data['rh'],
        tipo_e_rh_corretos=data['tipo_e_rh_corretos'],
        situacao=data['situacao']
    )
    db.session.add(novo_doador)
    db.session.commit()
    return jsonify({'message': 'Doador created successfully'}), 201

@main.route('/doacoes', methods=['POST'])
def create_doacao():
    data = request.get_json()
    nova_doacao = Doacao(
        data=data['data'],
        hora=data['hora'],
        volume=data['volume'],
        id_doador=data['id_doador'],
        situacao=data['situacao']
    )
    db.session.add(nova_doacao)
    db.session.commit()
    return jsonify({'message': 'Doacao created successfully'}), 201

# Nova rota para doar sangue
@main.route('/doar-sangue', methods=['POST'])
def doar_sangue():
    data = request.get_json()
    doador_id = data['doador_id']
    volume = data['volume']
    data_doacao = data['data']
    hora_doacao = data['hora']
    tipo_sanguineo = data['tipo_sanguineo']
    rh = data['rh']

    doador = Doador.query.get(doador_id)
    if not doador:
        return jsonify({'message': 'Doador não encontrado'}), 404

    doador.tipo_sanguineo = tipo_sanguineo
    doador.rh = rh
    doador.tipo_e_rh_corretos = True

    nova_doacao = Doacao(
        data=data_doacao,
        hora=hora_doacao,
        volume=volume,
        id_doador=doador_id,
        situacao='ativo'
    )

    db.session.add(nova_doacao)
    db.session.commit()

    return jsonify({'message': 'Doação registrada com sucesso'}), 201

# Nova rota para ver doações de um doador específico
@main.route('/doacoes/doador/<int:doador_id>', methods=['GET'])
def ver_doacoes_doador(doador_id):
    doador = Doador.query.get(doador_id)
    if not doador:
        return jsonify({'message': 'Doador não encontrado'}), 404

    doacoes = Doacao.query.filter_by(id_doador=doador_id).all()
    doacoes_list = [
        {
            'data': doacao.data.strftime('%Y-%m-%d'),
            'hora': doacao.hora.strftime('%H:%M:%S'),
            'volume': doacao.volume,
            'situacao': doacao.situacao
        }
        for doacao in doacoes
    ]

    return jsonify(doacoes_list), 200

# Nova rota para ver doações dentro de um período específico
@main.route('/doacoes/periodo', methods=['GET'])
def ver_doacoes_periodo():
    data_inicio = request.args.get('data_inicio')
    data_fim = request.args.get('data_fim')

    query = Doacao.query
    if data_inicio:
        query = query.filter(Doacao.data >= data_inicio)
    if data_fim:
        query = query.filter(Doacao.data <= data_fim)

    doacoes = query.all()
    doacoes_list = [
        {
            'data': doacao.data.strftime('%Y-%m-%d'),
            'hora': doacao.hora.strftime('%H:%M:%S'),
            'volume': doacao.volume,
            'situacao': doacao.situacao,
            'doador': doacao.doador.nome
        }
        for doacao in doacoes
    ]

    return jsonify(doacoes_list), 200
