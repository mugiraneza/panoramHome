import re

from panoramHome.settings import API_KEY, API_SECRET, NO_REPLY_MAIL, CUSTOM_APP_NAME
from .builder import build_signin_mail
from mailjet_rest import Client


def custom_mail_check(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    # pass the regular expression
    # and the string into the fullmatch() method
    if re.fullmatch(regex, email):
        return True
    else:
        return False


def send_mail_after_registration(email, user_name, token):
    print("#")
    print(str(token))
    mailjet = Client(auth=(API_KEY, API_SECRET), version='v3.1')
    mail_body = {
        'Messages': [
            {
                "From": {
                    "Email": NO_REPLY_MAIL,
                    "Name": CUSTOM_APP_NAME
                },
                "To": [
                    {
                        "Email": email,
                        "Name": user_name
                    }
                ],
                "Subject": "Validation de l'adresse email",
                "TextPart": "Greetings from Mailjet!",
                "HTMLPart": build_signin_mail("http://127.0.0.1:8000/verify/" + token)
            }
        ]
    }
    mailjet.send.create(data=mail_body)
