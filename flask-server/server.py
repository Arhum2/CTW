from enum import unique
from dotenv import load_dotenv
import os
from datetime import datetime
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from itsdangerous import json


# Environment variables
load_dotenv()
URI = os.getenv("URI")
#print(URI)

# Configure application
app = Flask(__name__)

# Configure Database
app.config['SQLALCHEMY_DATABASE_URI'] = URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# DB model
class Calls(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    volunteerName = db.Column(db.String(50), nullable=False)
    seniorName = db.Column(db.String(50), nullable=False)
    phoneNumber = db.Column(db.String)
    Date = db.Column(db.DATE)
    Time = db.Column(db.TIME)

    def to_json(self):
        return{
            'volunteerName': self.volunteerName,
            'seniorName': self.seniorName,
            'phoneNumber': self.phoneNumber,
            'Date': self.Date.strftime('%Y/%m/%d'),
            'Time': self.Time.strftime('%H:%M:%S')
        }

@app.route("/add_calls", methods=["POST"])

def get_calls():
    if request.method == 'POST':
        json = request.get_json()

        new_calls = Calls(
            volunteerName = request.json["volunteerName"],
            seniorName = request.json["seniorName"],
            phoneNumber = request.json["phoneNumber"],
            Date = request.json["Date"],
            Time = request.json["Time"]
        )

        db.session.add(new_calls)
        db.session.commit()

        return 'done', 201

@app.route('/call', methods=["GET"])
def call():
    call_list = Calls.query.all()
    return {
        "calls": [ call.to_json() for call in call_list ]
    }

    
    
    



if __name__ == "__main__":
    app.run(debug=True)