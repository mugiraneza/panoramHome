SIGN_MAIL_HEADER = "<!doctype html>" \
                   "<html>" \
                   "<head>" \
                   "    <style >" \
                   "        #outlook a {" \
                   "            padding: 0;" \
                   "        }" \
                   "        body {" \
                   "            margin: 0;" \
                   "            padding: 0;" \
                   "            -webkit-text-size-adjust: 100%;" \
                   "            -ms-text-size-adjust: 100%;" \
                   "        }" \
                   "    </style>" \
                   "</head>"

SIGN_MAIL_BODY = "<body>" \
                 "<a href='{}'" \
                 "target='_blank'>Activer mon compte</a>" \
                 "</body>"
SIGN_MAIL_FOOTER = "</html>"


def build_signin_mail(lien):
    return SIGN_MAIL_HEADER + SIGN_MAIL_BODY.format(lien) + SIGN_MAIL_FOOTER
