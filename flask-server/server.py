import os
from datetime import datetime
from dotenv import load_dotenv
from flask import Flask, redirect, request
from flask_sqlalchemy import SQLAlchemy

# Environment variables
load_dotenv()
URI = os.getenv("URI")

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
    volunteerPhoneNumber = db.Column(db.String(13))
    seniorName = db.Column(db.String(50))
    seniorPhoneNumber = db.Column(db.String(13))
    Time = db.Column(db.TIME)
    day = db.Column(db.String)
    phoneNumber = db.Column(db.String(13))    


    def to_json(self):
        return {
            "id": self.id,
            "volunteerName": self.volunteerName,
            "volunteerPhoneNumber": self.volunteerPhoneNumber,
            "seniorName": self.seniorName,
            "seniorPhoneNumber": self.seniorPhoneNumber,
            "Time": self.Time.strftime("%I:%M %p"),
            "day": self.day,
            "phoneNumber": self.phoneNumber,
        }

class Availability(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    volunteerName = db.Column(db.String(50))
    Monday = db.Column(db.TIME)
    Tuesday = db.Column(db.TIME)
    Wednesday = db.Column(db.TIME)
    Thursday = db.Column(db.TIME)
    Friday = db.Column(db.TIME)
    phoneNumber = db.Column(db.String(13))

    def to_json(self):
        return{
            'id': self.id,
            "volunteerName": self.volunteerName,
            "Monday": self.Monday.strftime("%I:%M %p"),
            "Tuesday": self.Tuesday.strftime("%I:%M %p"),
            "Wednesday": self.Wednesday.strftime("%I:%M %p"),
            "Thursday": self.Thursday.strftime("%I:%M %p"),
            "Friday": self.Friday.strftime("%I:%M %p"),
            "phoneNumber": self.phoneNumber,
        }



#Adding data end point

@app.route("/add_calls", methods=["POST"])
def get_calls():
    if request.method == "POST":
        new_calls = Calls(
            volunteerName=request.json["volunteerName"],
            volunteerPhoneNumber=request.json["volunteerPhoneNumber"],
            seniorName=request.json["seniorName"],
            seniorPhoneNumber=request.json["seniorPhoneNumber"],
            Time=datetime.strptime(request.json["Time"], "%I:%M %p").time(),
            day= request.json["day"],
            phoneNumber=request.json["phoneNumber"],
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
            phoneNumber=request.json['phoneNumber'],
        )

        db.session.add(new_availabilities)
        db.session.commit()

        return 'done', 201


#Data end point

@app.route("/call", methods=["GET"])
def call():
    call_list = Calls.query.all()
    return {"calls": [call.to_json() for call in call_list]}
    
@app.route("/Availability", methods=["GET"])
def availability():
    availability_list = Availability.query.all()
    return {"availability": [availability.to_json() for availability in availability_list]}



#Deleting end point

@app.route('/delete_call/<int:id>', methods=['GET', 'POST'])
def delete_call(id):
    if request.method == 'POST':
        call_to_delete = Calls.query.get_or_404(id)
        db.session.delete(call_to_delete)
        db.session.commit()
        return redirect("/call")
    else:
        return redirect("/call")

@app.route('/delete_availability/<int:id>', methods=['GET', 'POST'])
def delete_availability(id):
    if request.method == 'POST':
        availability_to_delete = Availability.query.get_or_404(id)
        db.session.delete(availability_to_delete)
        db.session.commit()
        return redirect('/Availability')
    else:
        return redirect('/Availability')






if __name__ == "__main__":
    app.run(debug=True)
