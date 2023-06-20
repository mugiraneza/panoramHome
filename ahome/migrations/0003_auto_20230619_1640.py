# Generated by Django 3.2.7 on 2023-06-19 14:40

import ahome.models
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ahome', '0002_auto_20230619_1334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='city',
            name='photo',
            field=models.ImageField(null=True, upload_to=ahome.models.get_file_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png', 'gif'])]),
        ),
        migrations.AlterField(
            model_name='planproperty',
            name='plan',
            field=models.ImageField(upload_to=ahome.models.get_file_path),
        ),
        migrations.AlterField(
            model_name='propertie',
            name='video',
            field=models.FileField(null=True, upload_to=ahome.models.get_file_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]),
        ),
    ]
