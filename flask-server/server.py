from dotenv import load_dotenv
import os
from datetime import datetime
from flask import Flask
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

@app.route("/")
def members():
    new_user = users(username="somevar", email="example@example.com")
    db.session.add(new_user)
    db.session.commit()
    return{"Volunteers": ["1", "2"]}

#TODO List volunteers


#TODO Assign seniors to volunteers


#TODO Assign phone numbers to each volunteer


#TODO Assign times for volunteer calling 


#TODO  move volunteers to different seniors


#TODO move seniors to different volunteers

if __name__ == "__main__":
    app.run(debug=True)