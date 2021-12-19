## ISP flask-react-nginx-postgresql project

To start project:
```
$ docker-compose up
```
To authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP request to backend API. API Gateway validates the token on behalf of your API

Implemented logging and its output to the appl.log file

Implemented CRUD queries that can be checked in 
```
/backend/app/jogging/controllers.py
```
for example DELETE:
```py
@app.route('/jogging/<jog_id>', methods=['DELETE'])
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
```

Models:
  - USERS:
  ```py
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    role = db.Column(db.String(255), nullable=False)
    date_created  = db.Column(db.DateTime, default=db.func.current_timestamp())
  ```  
 - JOGS:
 ```py
    id = db.Column(db.Integer, primary_key=True)
    speed = db.Column(db.Integer, nullable=False)
    distance = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    time = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, default=db.func.current_date())
 ```
