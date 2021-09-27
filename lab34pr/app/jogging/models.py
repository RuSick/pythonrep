from app import db
from ..auth.models import Users

class Jogs(db.Model):
    __tablename__ = 'joges'

    id = db.Column(db.Integer, primary_key=True)
    speed = db.Column(db.Integer, nullable=False)
    distance = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    time = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, default=db.func.current_date())

    def __init__(self, speed, distance, user_id, time, date):
        self.speed = speed
        self.distance = distance
        self.time = time
        self.user_id = user_id
        self.date = date

    def json(self):
        return {
            "speed": self.speed,
            "distance": self.distance,
            "runner": Users.query.filter_by(id=self.user_id).first().json(),
            "time": self.time,
            "date": self.date,
            "id": self.id,
        }
