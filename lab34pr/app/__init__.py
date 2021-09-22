from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
flask_bcrypt = Bcrypt(app)
jwt = JWTManager(app)


from app.jogging.controllers import jogging
from app.auth.controllers import auth
app.register_blueprint(jogging)
app.register_blueprint(auth)