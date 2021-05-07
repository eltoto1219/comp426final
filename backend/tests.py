import os

from dotenv import find_dotenv, load_dotenv
from flask import jsonify
from twilio.rest import Client

dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path)

# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure

account_sid = os.environ["TWILIO_ACCOUNT_SID"]
api_secret = os.environ["TWILIO_API_SECRET"]
api_key = os.environ["TWILIO_API_KEY"]
chat_sid = os.environ["TWILIO_CHAT_SERVICE_SID"]

client = Client(api_key, api_secret, account_sid)

users = client.chat.services(chat_sid).users.list(limit=20)


def fetch_user(identity):
    client = Client(
        os.environ["TWILIO_API_KEY"],
        os.environ["TWILIO_API_SECRET"],
        os.environ["TWILIO_ACCOUNT_SID"],
    )

    myid = os.environ.get("TWILIO_CHAT_SERVICE_SID", None)
    if myid is None:
        return
    user = client.chat.services(myid).users(identity).fetch().links
    raise Exception(user)

    # user = client.chat.services(myid).users(identity).user_channels.list()
    for r in user:
        print(r.channel_sid)

    # print(channels)
    # return jsonify(
    #     attrs=user.attributes,
    #     name=user.friendly_name,
    #     created=user.date_created,
    #     channels=user.joined_channels_count,
    #     links=user.links,
    # )


for record in users:
    fetch_user(identity=record.sid)


#      .user_channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
