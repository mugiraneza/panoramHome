# Generated by Django 3.2.6 on 2021-08-13 18:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ahome', '0004_city_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='city',
            name='photo',
            field=models.ImageField(null=True, upload_to='city_photo', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png', 'gif'])]),
        ),
    ]
