# Generated by Django 4.2.2 on 2023-07-05 09:30

import ahome.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('description', models.TextField(max_length=300)),
                ('photo', models.ImageField(null=True, upload_to=ahome.models.get_file_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'png', 'gif'])])),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('description', models.TextField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('description', models.TextField(max_length=300)),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='states', to='ahome.country')),
            ],
        ),
        migrations.CreateModel(
            name='Propertie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=250)),
                ('name', models.CharField(default='Real House Luxury Villa', max_length=250)),
                ('description', models.TextField(max_length=300)),
                ('bedroom', models.IntegerField(default=0)),
                ('bathroom', models.IntegerField(default=0)),
                ('surface', models.IntegerField(default=0)),
                ('garage', models.IntegerField(default=0)),
                ('cost', models.IntegerField(default=0)),
                ('room', models.IntegerField(default=0)),
                ('type', models.CharField(choices=[('Appartement', 'Appartement'), ('Appartement Duplex', 'Duplex'), ('Appartement Triplex', 'Triplex'), ('Appartement Souplex', 'Souplex'), ('Maison', 'Maison***'), ('Maison à étages', 'Maison à étages'), ('Maison à toit plat', 'Maison à toit plat'), ('Maison bioclimatique', 'Maison bioclimatique'), ('Maison d’architecte', 'Maison d’architecte'), ('Maison duplex', 'Maison duplex'), ('Maison en bois', 'Maison en bois'), ('Maison en lotissement', 'Maison en lotissement'), ('Maison en pierre', 'Maison en pierre'), ('Maison en VEFA', 'Maison en VEFA'), ('Maison évolutive', 'Maison évolutive'), ('Maison individuelle', 'Maison individuelle'), ('Maison insolite', 'Maison insolite'), ('Maison coloniale', 'Maison coloniale'), ('Maison jumelée', 'Maison jumelée'), ('Maison loft', 'Maison loft'), ('Maisons longères', 'Maisons longères'), ('Maison low cost', 'Maison low cost'), ('Maison meulière', 'Maison meulière'), ('Maison niveaux', 'Maison niveaux'), ('Maison Phénix', 'Maison Phénix'), ('Maison préfabriquée', 'Maison préfabriquée'), ('Maison prête à finir', 'Maison prête à finir'), ('Maison plain-pied', 'Maison plain-pied'), ('Mas de Provence', 'Mas de Provence'), ('Résidence séniors', 'Résidence séniors')], default='Maison', max_length=250)),
                ('status', models.CharField(choices=[('for sale', 'for sale'), ('for rent', 'for rent')], default='for sale', max_length=250)),
                ('airCond', models.BooleanField(default=False)),
                ('balcony', models.BooleanField(default=False)),
                ('internet', models.BooleanField(default=False)),
                ('dishwasher', models.BooleanField(default=False)),
                ('bedding', models.BooleanField(default=False)),
                ('cableTV', models.BooleanField(default=False)),
                ('parking', models.BooleanField(default=False)),
                ('pool', models.BooleanField(default=False)),
                ('fridge', models.BooleanField(default=False)),
                ('featured', models.BooleanField(default=False)),
                ('video', models.FileField(null=True, upload_to=ahome.models.get_file_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])),
                ('localisation', models.CharField(max_length=150)),
                ('created_at', models.DateTimeField(editable=False)),
                ('modified_at', models.DateTimeField()),
                ('presentation_image', models.ImageField(null=True, upload_to='property_photo', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpeg', 'jpg', 'png', 'gif'])])),
                ('city', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='propertie', to='ahome.city')),
            ],
        ),
        migrations.CreateModel(
            name='ImageProperty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to=ahome.models.get_file_path)),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='imageProperties', to='ahome.propertie')),
            ],
        ),
        migrations.AddField(
            model_name='city',
            name='state',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='city', to='ahome.state'),
        ),
        migrations.CreateModel(
            name='PlanProperty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan', models.ImageField(upload_to=ahome.models.get_file_path)),
                ('floorNum', models.IntegerField()),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='planProperties', to='ahome.propertie')),
            ],
            options={
                'unique_together': {('property', 'floorNum')},
            },
        ),
    ]