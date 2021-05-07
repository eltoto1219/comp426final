import os
import string
from os.path import dirname, join

import requests
from dotenv import load_dotenv
from faker import Faker
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
# from flask.ext.cors import CORS
from inflection import underscore
from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import ChatGrant, SyncGrant
from twilio.rest import Client

# Convert keys to snake_case to conform with the twilio-python api definition contract


def snake_case_keys(somedict):
    snake_case_dict = {}
    for key, value in somedict.items():
        snake_case_dict[underscore(key)] = value
    return snake_case_dict


app = Flask(__name__)
cors = CORS(app)
fake = Faker()
dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path)


@app.route("/random", methods=["GET"])
def random_string():
    url = "https://random.justyy.workers.dev/api/random/"
    result = requests.get(url).text[1:11]
    result = result.translate(string.punctuation)
    return result


@app.route("/user/<identity>", methods=["GET"])
def fetch_user(identity):
    client = Client(
        os.environ["TWILIO_API_KEY"],
        os.environ["TWILIO_API_SECRET"],
        os.environ["TWILIO_ACCOUNT_SID"],
    )

    myid = os.environ.get("TWILIO_CHAT_SERVICE_SID", None)
    if myid is None:
        return
    user = client.chat.services(myid).users(identity).fetch()
    return jsonify(
        attrs=user.attributes,
        name=user.friendly_name,
        created=user.date_created,
        channels=user.joined_channels_count,
        links=user.links,
    )


@app.route("/config")
def config():
    return jsonify(
        TWILIO_ACCOUNT_SID=os.environ["TWILIO_ACCOUNT_SID"],
        TWILIO_NOTIFICATION_SERVICE_SID=os.environ.get(
            "TWILIO_NOTIFICATION_SERVICE_SID", None
        ),
        TWILIO_API_KEY=os.environ["TWILIO_API_KEY"],
        TWILIO_API_SECRET=bool(os.environ["TWILIO_API_SECRET"]),
        TWILIO_CHAT_SERVICE_SID=os.environ.get("TWILIO_CHAT_SERVICE_SID", None),
        TWILIO_SYNC_SERVICE_SID=os.environ.get("TWILIO_SYNC_SERVICE_SID", "default"),
    )


@app.route("/token", methods=["GET"])
def randomToken():
    return generateToken(fake.user_name())


@app.route("/token", methods=["POST"])
def createToken():
    # Get the request json or form data
    content = request.get_json() or request.form
    # get the identity from the request, or make one up
    identity = content.get("identity", fake.user_name())
    return generateToken(identity)


@app.route("/token/<identity>", methods=["POST", "GET"])
def token(identity):
    return generateToken(identity)


# this basically creates a user
def generateToken(identity):
    account_sid = os.environ["TWILIO_ACCOUNT_SID"]
    api_key = os.environ["TWILIO_API_KEY"]
    api_secret = os.environ["TWILIO_API_SECRET"]
    sync_service_sid = os.environ.get("TWILIO_SYNC_SERVICE_SID", "default")
    chat_service_sid = os.environ.get("TWILIO_CHAT_SERVICE_SID", None)
    token = AccessToken(account_sid, api_key, api_secret, identity=identity)
    # we sync here, according to tutorial. not too sure what it does
    if sync_service_sid:
        sync_grant = SyncGrant(service_sid=sync_service_sid)
        token.add_grant(sync_grant)

    # Create a Video grant and add to token
    # video_grant = VideoGrant()
    # token.add_grant(video_grant)

    # Create an Chat grant and add to token, we basically add chat services for the user
    if chat_service_sid:
        chat_grant = ChatGrant(service_sid=chat_service_sid)
        token.add_grant(chat_grant)

    # Return token info as JSON
    return jsonify(identity=identity, token=token.to_jwt())


@app.route("/<path:path>")
def static_file(path):
    return app.send_static_file(path)


# starter code: Ensure that the Sync Default Service is provisioned
def provision_sync_default_service():
    client = Client(
        os.environ["TWILIO_API_KEY"],
        os.environ["TWILIO_API_SECRET"],
        os.environ["TWILIO_ACCOUNT_SID"],
    )
    client.sync.services("default").fetch()


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    provision_sync_default_service()
    app.run(debug=True, host="0.0.0.0")
