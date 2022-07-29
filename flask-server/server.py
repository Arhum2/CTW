from ast import Delete
from calendar import TUESDAY
import os
from datetime import datetime
from enum import unique
from dotenv import load_dotenv
from flask import Flask, redirect, request
from flask_sqlalchemy import SQLAlchemy

# Environment variables
load_dotenv()
URI = os.getenv("URI")
# print(URI)

# Configure application
app = Flask(__name__)

# Configure Database
app.config["SQLALCHEMY_DATABASE_URI"] = URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# DB model
class Calls(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    volunteerName = db.Column(db.String(50))
    seniorName = db.Column(db.String(50))
    phoneNumber = db.Column(db.String(50))
    Date = db.Column(db.DATE)
    Time = db.Column(db.TIME)


    def to_json(self):
        return {
            "id": self.id,
            "volunteerName": self.volunteerName,
            "seniorName": self.seniorName,
            "phoneNumber": self.phoneNumber,
            "Date": self.Date.strftime("%Y/%m/%d"),
            "Time": self.Time.strftime("%I:%M %p"),
        }

class Availability(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    volunteerName = db.Column(db.String(50))
    Monday = db.Column(db.TIME)
    Tuesday = db.Column(db.TIME)
    Wednesday = db.Column(db.TIME)
    Thursday = db.Column(db.TIME)
    Friday = db.Column(db.TIME)

    def to_json(self):
        return{
            'id': self.id,
            "volunteerName": self.volunteerName,
            "Monday": self.Time.strftime("%I:%M %p"),
            "Tuesday": self.Time.strftime("%I:%M %p"),
            "Wednesday": self.Time.strftime("%I:%M %p"),
            "Thursday": self.Time.strftime("%I:%M %p"),
            "Friday": self.Time.strftime("%I:%M %p"),
        }


@app.route("/add_calls", methods=["POST"])
def get_calls():
    if request.method == "POST":
        json = request.get_json()

        new_calls = Calls(
            volunteerName=request.json["volunteerName"],
            seniorName=request.json["seniorName"],
            phoneNumber=request.json["phoneNumber"],
            Date=datetime.strptime(request.json["Date"], "%d/%b/%Y").date(),
            Time=datetime.strptime(request.json["Time"], "%I:%M %p").time(),
        )

        db.session.add(new_calls)
        db.session.commit()

        return "done", 201

@app.route('/add_availability', methods=['POST'])
def get_availabilities():
    if request.method == 'POST':
        new_availabilities = Availability(
            volunteerName=request.json["volunteerName"],
            Monday=datetime.strptime(request.json["Monday"], "%I:%M %p").time(),
            Tuesday=datetime.strptime(request.json["Tuesday"], "%I:%M %p").time(),
            Wednesday=datetime.strptime(request.json["Wednesday"], "%I:%M %p").time(),
            Thursday=datetime.strptime(request.json["Thursday"], "%I:%M %p").time(),
            Friday=datetime.strptime(request.json["Friday"], "%I:%M %p").time(),
        )

        db.session.add(new_availabilities)
        db.session.commit()

        return 'done', 201


@app.route("/call", methods=["GET"])
def call():
    call_list = Calls.query.all()
    return {"calls": [call.to_json() for call in call_list]}

@app.route('/delete_call/<int:id>', methods=['GET', 'POST'])
def delete_call(id):
    if request.method == 'POST':
        call_to_delete = Calls.query.get_or_404(id)
        db.session.delete(call_to_delete)
        db.session.commit()
        return redirect("/call")
    else:
        return redirect("/call")

if __name__ == "__main__":
    app.run(debug=True)
