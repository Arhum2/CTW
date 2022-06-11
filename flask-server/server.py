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
    phoneNumber = db.Column(db.String)
    Date = db.Column(db.DATE)
    Time = db.Column(db.TIME)


@app.route("/calls", methods=["GET"])

def get_calls():
    return
    [
        {
        "id": "1",
        "voulnteerName": "Somename",
        "seniorName": "somename",
        "phoneNumber": "1234567890",
        "Date": "",
        "Time": ""

        }
    ]



if __name__ == "__main__":
    app.run(debug=True)