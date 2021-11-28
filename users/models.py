import re
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from email_validator import validate_email, EmailNotValidError
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'


def check(email):
    # pass the regular expression
    # and the string into the fullmatch() method
    if re.fullmatch(regex, email):
        return True
    else:
        return False


# Create your models here.
class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, password, pseudo, first_name, last_name, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        if not other_fields.get('is_staff'):
            raise ValueError('SuperUser must be assigned to is_staff=True')
        if not other_fields.get('is_superuser'):
            raise ValueError('SuperUser must be assigned to is_superuser=True')
        return self.create_user(email, pseudo, first_name, last_name, password, **other_fields)

    def create_user(self, email, pseudo, first_name, last_name, password, **other_fields):
        if not email:
            raise ValueError('You must provide an email address')
        elif not check(email):
            raise ValueError('Email address must be a valid to process')
        try:
            valid = validate_email(email)
            email = valid.email
            user = self.model.user(email, pseudo, first_name, last_name, password, **other_fields)
            user.set_password(password)
            user.save()
            return user
        except EmailNotValidError:
            raise ValueError('Email address must be a valid to process')


class NewUser(AbstractBaseUser, PermissionsMixin):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name']
    email = models.EmailField(_('email address'), unique=True)
    pseudo = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_('about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    objects = CustomAccountManager()

    def __str__(self):
        return self.user_name
