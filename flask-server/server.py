from enum import unique
from dotenv import load_dotenv
import os
from datetime import datetime
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy


# Environment variables
load_dotenv()
URI = os.getenv("URI")
print(URI)

# Configure application
app = Flask(__name__)

# Configure Database
app.config['SQLALCHEMY_DATABASE_URI'] = URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# DB model
class calls(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    volunteerName = db.Column(db.String(50), nullable=False)
    seniorName = db.Column(db.String(50), nullable=False)
    phoneNumber = db.Column(db.INT)
    Date = db.Column(db.DATE)
    Time = db.Column(db.TIME)


@app.route("/", methods=["GET", "POST"])

# def send_daa():
#     return{}
def members():
    new_calls = calls(volunteerName="Arhum", seniorName="somename", phoneNumber="343434434440")
    db.session.add(new_calls)
    db.session.commit()
    return{"Volunteers": ["1", "2"]}

# def add_Members():
#     volunteerName = request.json['volunteerName']
#     seniorName = request.json['seniorName']
#     phoneNumber = request.json['phoneNumber']
#     Date = request.json['Date']
#     Time = request.json['Time']

#     addMembers = Members(
#         volunteerName=volunteerName,
#         seniorName=seniorName,
#         phoneNumber=phoneNumber,
#         Date=Date,
#         Time=Time
#     )

#     db.session.add(addMembers)
#     db.session.commit()
#     return


#TODO List volunteers


#TODO Assign seniors to volunteers


#TODO Assign phone numbers to each volunteer


#TODO Assign times for volunteer calling 


#TODO  move volunteers to different seniors


#TODO move seniors to different volunteers

if __name__ == "__main__":
    app.run(debug=True)