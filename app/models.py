from . import db

class Doador(db.Model):
    __tablename__ = 'Doadores'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(150), nullable=False)
    cpf = db.Column(db.String(14), nullable=False, unique=True)
    contato = db.Column(db.String(15), nullable=False)
    tipo_sanguineo = db.Column(db.Enum('A', 'B', 'AB', 'O'), nullable=False)
    rh = db.Column(db.Enum('positivo', 'negativo'), nullable=False)
    tipo_e_rh_corretos = db.Column(db.Boolean, nullable=False)
    situacao = db.Column(db.Enum('ativo', 'inativo'), nullable=False)

    doacoes = db.relationship('Doacao', backref='doador', lazy=True)

class Doacao(db.Model):
    __tablename__ = 'Doacoes'

    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.Date, nullable=False)
    hora = db.Column(db.Time, nullable=False)
    volume = db.Column(db.Float, nullable=False)
    id_doador = db.Column(db.Integer, db.ForeignKey('Doadores.id'), nullable=False)
    situacao = db.Column(db.Enum('ativo', 'inativo'), nullable=False)
