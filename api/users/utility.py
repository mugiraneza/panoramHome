import re

from panoramHome.settings import API_KEY, API_SECRET, NO_REPLY_MAIL, CUSTOM_APP_NAME
from .builder import build_signin_mail, build_login_mail
from mailjet_rest import Client


def custom_mail_check(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    # pass the regular expression
    # and the string into the fullmatch() method
    if re.fullmatch(regex, email):
        return True
    else:
        return False


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
        user_agent = ""
    else:
        ip = request.META.get('REMOTE_ADDR')
        user_agent = request.META.get('HTTP_USER_AGENT')
    return [ip, user_agent]


def send_mail_after_registration(email, user_name, token, ip=None):
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
                "HTMLPart": build_signin_mail(user_name, "http://127.0.0.1:8000/api/user/verify/" + token)
            }
        ]
    }
    mailjet.send.create(data=mail_body)
