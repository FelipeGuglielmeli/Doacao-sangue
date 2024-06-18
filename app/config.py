import os
from dotenv import load_dotenv

load_dotenv()

# Debugging: Verificar se as variáveis de ambiente estão carregadas corretamente
print(f"DB_NAME: {os.environ.get('DB_NAME')}")
print(f"DB_USER: {os.environ.get('DB_USER')}")
print(f"DB_PASSWORD: {os.environ.get('DB_PASSWORD')}")
print(f"DB_HOST: {os.environ.get('DB_HOST')}")
print(f"DB_PORT: {os.environ.get('DB_PORT')}")

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = f'mysql+pymysql://{os.environ.get("DB_USER")}:{os.environ.get("DB_PASSWORD")}@{os.environ.get("DB_HOST")}:{os.environ.get("DB_PORT")}/{os.environ.get("DB_NAME")}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
