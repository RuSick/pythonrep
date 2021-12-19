from flask import request, jsonify, Blueprint
from flask_jwt_extended import create_access_token
from flask_jwt_extended import create_refresh_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import jwt_refresh_token_required
from flask_jwt_extended import get_jwt_identity
from app import db, jwt, flask_bcrypt
from app.auth.models import Users
import logging

auth = Blueprint('auth', __name__)
@auth.route('/', methods=['GET'])
def index():
    return jsonify({'ok': True, 'message': 'pong!'}), 401


@jwt.unauthorized_loader
def unauthorized_response(callback):
    return jsonify({ 'ok': False, 'message': 'Missing authorization header' }), 401

@auth.route('/auth', methods=['POST'])
def auth_user():
    data = request.get_json()
    user = None
    user = Users.query.filter_by(login=data['login']).first()
    print(user)
    if user and flask_bcrypt.check_password_hash(user.password, data['password']):
        del user.password
        access_token = create_access_token(identity=user.json())
        refresh_token = create_refresh_token(identity=user.json()) # Why it set
        logging.info("User connected")
        return jsonify({'ok': True, 'access_token': access_token, 'refresh_token': refresh_token, 'user': user.json()}), 200
    else:
        return jsonify({'ok': False, 'message': 'Invalid credentials'}), 401


@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    data['password'] = flask_bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = Users(login=data['login'], email=data['email'], password=data['password'], role=data['role'])
    db.session.add(user)
    db.session.commit()
    print(user.json())
    access_token = create_access_token(identity=user.json())
    refresh_token = create_refresh_token(identity=user.json()) # Why it set
    logging.info('Register user - {}'.format(user.login))
    return jsonify({'ok': True, 'access_token': access_token, 'refresh_token': refresh_token, 'user': user.json()}), 200


@auth.route('/user', methods=['GET'])
@jwt_required
def get_user_info():
    data = get_jwt_identity()
    return jsonify(data), 200


@auth.route('/user', methods=['DELETE'])
@jwt_required
def delete_user(user_id):
    credentials = get_jwt_identity()
    user_to_delete = Users.query.filter_by(id=credentials[0]['id']).first()
    if user_to_delete:
        db.session.delete(user_to_delete)
        db.session.commit()
        logging.info('Deleted user - {}'.format(user_id))
        return jsonify({'ok': True, 'message': 'User has been successfully deleted'}), 200
    else:
        return jsonify({'ok': False, 'message': 'User doesnt exist, try again with authropriate id'}), 400

@auth.route('/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh():
    current_user = get_jwt_identity()
    ret = { 'token': create_access_token(identity=current_user) }
    return jsonify({'ok': True, 'data': ret}), 200