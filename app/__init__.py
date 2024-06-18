from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS  # Importar CORS
from .config import Config  # Certifique-se de usar o caminho relativo

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    
    CORS(app)  # Configurar CORS no aplicativo Flask

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
