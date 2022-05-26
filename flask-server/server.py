from flask import Flask

# Configure application
app = Flask(__name__)


@app.route("/members")
def members():
    return{"Volunteers": ["1", "2"]}

if __name__ == "__main__":
    app.run(debug=True)
#TODO List volunteers


#TODO Assign seniors to volunteers


#TODO Assign phone numbers to each volunteer


#TODO Assign times for volunteer calling 


#TODO  move volunteers to different seniors


#TODO move seniors to different volunteers