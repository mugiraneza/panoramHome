import uuid

from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from email_validator import validate_email
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
from users.utility import custom_mail_check, send_mail_after_registration


class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, user_name, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        if not other_fields.get('is_staff'):
            raise ValueError('SuperUser must be assigned to is_staff=True')
        if not other_fields.get('is_superuser'):
            raise ValueError('SuperUser must be assigned to is_superuser=True')
        return self.create_user(email, user_name, first_name, last_name, password, **other_fields)

    def create_user(self, email, user_name, first_name, last_name, password, **other_fields):
        if not email:
            raise ValueError('You must provide an email address')
        elif not custom_mail_check(email):
            raise ValueError('Email address must be a valid to process')

        valid = validate_email(email)
        email = valid.email
        user = self.model(email=email, user_name=user_name, first_name=first_name, last_name=last_name,
                          password=password, **other_fields)
        user.set_password(password)
        user.save()
        send_mail_after_registration(user.email, user.user_name, str(user.act_token))
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name', 'last_name']
    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_('about'), max_length=500, blank=True)
    act_token = models.UUIDField(default=uuid.uuid4,null=True,unique=True, blank=True, editable=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    objects = CustomAccountManager()

    def __str__(self):
        return self.user_name
            
    def disable_user(self):
        self.is_active=False
        
    def enable_user(self):
        self.is_active=True