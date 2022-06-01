from pickle import FALSE
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Configure application]
app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ctw.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


@app.route("/")
def members():
    return{"Volunteers": ["1", "2"]}

#TODO List volunteers


#TODO Assign seniors to volunteers


#TODO Assign phone numbers to each volunteer


#TODO Assign times for volunteer calling 


#TODO  move volunteers to different seniors


#TODO move seniors to different volunteers

if __name__ == "__main__":
    app.run(debug=True)