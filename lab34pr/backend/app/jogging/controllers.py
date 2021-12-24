from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import logging
from app import jwt, app, db
from app.jogging.models import Jogs


jogging = Blueprint('jogging', __name__)

@jwt.unauthorized_loader
def unauthorized_response(callback):
    return jsonify({ 'ok': False, 'message': 'Missing authorization header' }), 401


@app.route('/api/jogging', methods=['GET'])
@jwt_required
def get_all_joges():
    jogs = Jogs.query.all()
    jogs_json = list(map(lambda jogs: jogs.json(), jogs))
    return jsonify({'ok': True, 'jogs': jogs_json}), 200

@app.route('/api/jogging/<jog_id>', methods=['GET'])
@jwt_required
def get_jog(jog_id):
    jog_to_return = Jogs.query.filter_by(id=jog_id).first()
    if jog_to_return:
        return jsonify({"ok": True, 'jog': jog_to_return.json()})
    else:
        return jsonify({"ok": False, "message": "No jogs with such id"}), 400

@app.route('/api/jogging', methods=['POST'])
@jwt_required
def create_jog():
    user=get_jwt_identity()
    data = request.get_json()
    print(data)
    new_jog = Jogs(time=data['time'], distance=data['distance'], user_id=user['id'], speed=data['speed'], date=data['date'])
    db.session.add(new_jog)
    db.session.commit()
    logging.info("Jog {} created".format(new_jog.id))
    return jsonify({'ok': True, "Jog": new_jog.json()})


@app.route('/api/jogging/<jog_id>', methods=['DELETE'])
@jwt_required
def delete_jog(jog_id):
    jog_to_delete = Jogs.query.filter_by(id=jog_id).first()
    if jog_to_delete:
        db.session.delete(jog_to_delete)
        db.session.commit()
        logging.info("Jog {} deleted".format(jog_id))
        return jsonify({'ok': True, "message": "Jog has been deleted successfully"}), 200
    else:
        return jsonify({"ok": False, "message": "No jogs with such id"}), 400


@app.route('/api/jogging/<jog_id>', methods=['PUT'])
@jwt_required
def update_jogs(jog_id):
    data = request.get_json()
    jog = Jogs.query.filter_by(id=jog_id).update({"time": data['time'], "distance": data['distance'], "speed": data['speed'], "date": data['date']})
    db.session.commit()
    new_jog = Jogs.query.filter_by(id=jog_id).first()
    if new_jog:
        logging.info("Jog {} updated".format(jog_id))
        return jsonify({'ok': True, 'Jog': new_jog.json()})
    else:
        return jsonify({'ok': False, 'message': 'No joges to update'}), 404

@app.route('/api/user/jogging', methods=['GET'])
@jwt_required
def get_user_jogs():
    print(get_jwt_identity())
    user_creds_id = get_jwt_identity()['id']
    user_jogs = Jogs.query.filter_by(user_id=user_creds_id).all()
    if user_jogs:
        user_jogs_json = list(map(lambda _user_jogs: _user_jogs.json() ,user_jogs))
        return jsonify({'ok': True, 'user_jogs': user_jogs_json}), 200
    else:
        return jsonify({'ok': False, 'message': "Cannot find user places"}), 400

# curl  -H 'Content-Type: application/json' --data '{"time":123,"distance":123,"speed":123,"date":"122"}' localhost:8080
#curl -X 'PUT' -H "Content-Type: application/json" -d '{"time":223,"distance":133,"speed":777,"date":"saturday"}' localhost:8080/1
#curl -X PUT -H "Content-Type: application/json" -d '{"key1":"value"}' "YOUR_URI"
#curl -X 'POST' -H "Content-Type: application/json" --data '{"login":"admin1","email":"admin@gmail.com","password":"admin123","role":"admin"}' localhost:8080/register

#insert into users(login, email, password, role) values ('alex', 'sankai1917', '\\here password hash\\', 'admin');
#insert into joges(speed, distance, user_id, time, date) values(15, 5, 1, 4, '22.01.2000');