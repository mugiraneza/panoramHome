# Generated by Django 4.2.2 on 2023-07-03 09:09

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_remove_newuser_is_verified_alter_newuser_act_token_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='act_token',
            field=models.UUIDField(blank=True, default=uuid.uuid4, editable=False),
        ),
    ]
