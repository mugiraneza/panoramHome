# Generated by Django 4.2.4 on 2023-08-08 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ahome', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='propertie',
            old_name='type',
            new_name='type_bien',
        ),
        migrations.AddField(
            model_name='propertie',
            name='is_published',
            field=models.BooleanField(default=True),
        ),
    ]
