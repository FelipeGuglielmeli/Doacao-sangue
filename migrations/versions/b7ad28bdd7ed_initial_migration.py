"""Initial migration.

Revision ID: b7ad28bdd7ed
Revises: 
Create Date: 2024-06-16 14:53:58.866591

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'b7ad28bdd7ed'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.create_table('doadores',
    # sa.Column('codigo', sa.Integer(), nullable=False),
    # sa.Column('nome', sa.String(length=150), nullable=False),
    # sa.Column('cpf', sa.String(length=14), nullable=False),
    # sa.Column('contato', sa.String(length=15), nullable=False),
    # sa.Column('tipo_sanguineo', sa.Enum('A', 'B', 'AB', 'O'), nullable=False),
    # sa.Column('rh', sa.Enum('positivo', 'negativo'), nullable=False),
    # sa.Column('tipo_e_rh_corretos', sa.Boolean(), nullable=False),
    # sa.Column('situacao', sa.Enum('ativo', 'inativo'), nullable=False),
    # sa.PrimaryKeyConstraint('codigo'),
    # sa.UniqueConstraint('cpf')
    # )
    # op.create_table('doacoes',
    # sa.Column('codigo', sa.Integer(), nullable=False),
    # sa.Column('data', sa.Date(), nullable=False),
    # sa.Column('hora', sa.Time(), nullable=False),
    # sa.Column('volume', sa.Float(), nullable=False),
    # sa.Column('doador_codigo', sa.Integer(), nullable=False),
    # sa.Column('situacao', sa.Enum('ativo', 'inativo'), nullable=False),
    # sa.ForeignKeyConstraint(['doador_codigo'], ['doadores.codigo'], ),
    # sa.PrimaryKeyConstraint('codigo')
    # )
    # op.drop_table('Doadores')
    # with op.batch_alter_table('SequelizeMeta', schema=None) as batch_op:
    #     batch_op.drop_index('name')

    # op.drop_table('SequelizeMeta')
    # op.drop_table('Doacoes')
    # ### end Alembic commands ###
    pass


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.create_table('Doacoes',
    # sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    # sa.Column('data', sa.DATE(), nullable=False),
    # sa.Column('hora', mysql.TIME(), nullable=False),
    # sa.Column('volume', mysql.DECIMAL(precision=10, scale=2), nullable=False),
    # sa.Column('id_doador', mysql.INTEGER(), autoincrement=False, nullable=False),
    # sa.Column('situacao', mysql.ENUM('ativo', 'inativo'), nullable=False),
    # sa.ForeignKeyConstraint(['id_doador'], ['Doadores.id'], name='Doacoes_ibfk_1'),
    # sa.PrimaryKeyConstraint('id'),
    # mysql_collate='utf8mb4_0900_ai_ci',
    # mysql_default_charset='utf8mb4',
    # mysql_engine='InnoDB'
    # )
    # op.create_table('SequelizeMeta',
    # sa.Column('name', mysql.VARCHAR(collation='utf8mb3_unicode_ci', length=255), nullable=False),
    # sa.PrimaryKeyConstraint('name'),
    # mysql_collate='utf8mb3_unicode_ci',
    # mysql_default_charset='utf8mb3',
    # mysql_engine='InnoDB'
    # )
    # with op.batch_alter_table('SequelizeMeta', schema=None) as batch_op:
    #     batch_op.create_index('name', ['name'], unique=True)

    # op.create_table('Doadores',
    # sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    # sa.Column('nome', mysql.VARCHAR(length=255), nullable=False),
    # sa.Column('cpf', mysql.VARCHAR(length=255), nullable=False),
    # sa.Column('contato', mysql.VARCHAR(length=255), nullable=False),
    # sa.Column('tipo_sanguineo', mysql.ENUM('A', 'B', 'AB', 'O'), nullable=False),
    # sa.Column('rh', mysql.ENUM('positivo', 'negativo'), nullable=False),
    # sa.Column('tipo_e_rh_corretos', mysql.TINYINT(display_width=1), autoincrement=False, nullable=False),
    # sa.Column('situacao', mysql.ENUM('ativo', 'inativo'), nullable=False),
    # sa.PrimaryKeyConstraint('id'),
    # mysql_collate='utf8mb4_0900_ai_ci',
    # mysql_default_charset='utf8mb4',
    # mysql_engine='InnoDB'
    # )
    # op.drop_table('doacoes')
    # op.drop_table('doadores')
    # ### end Alembic commands ###
    pass
