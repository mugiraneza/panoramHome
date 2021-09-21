# Generated by Django 3.2.6 on 2021-08-07 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ahome', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertie',
            name='type',
            field=models.CharField(choices=[('Appartement', 'Appartement'), ('Appartement Duplex', 'Duplex'), ('Appartement Triplex', 'Triplex'), ('Appartement Souplex', 'Souplex'), ('Maison', 'Maison***'), ('Maison à étages', 'Maison à étages'), ('Maison à toit plat', 'Maison à toit plat'), ('Maison bioclimatique', 'Maison bioclimatique'), ('Maison d’architecte', 'Maison d’architecte'), ('Maison duplex', 'Maison duplex'), ('Maison en bois', 'Maison en bois'), ('Maison en lotissement', 'Maison en lotissement'), ('Maison en pierre', 'Maison en pierre'), ('Maison en VEFA', 'Maison en VEFA'), ('Maison évolutive', 'Maison évolutive'), ('Maison individuelle', 'Maison individuelle'), ('Maison insolite', 'Maison insolite'), ('Maison coloniale', 'Maison coloniale'), ('Maison jumelée', 'Maison jumelée'), ('Maison loft', 'Maison loft'), ('Maisons longères', 'Maisons longères'), ('Maison low cost', 'Maison low cost'), ('Maison meulière', 'Maison meulière'), ('Maison niveaux', 'Maison niveaux'), ('Maison Phénix', 'Maison Phénix'), ('Maison préfabriquée', 'Maison préfabriquée'), ('Maison prête à finir', 'Maison prête à finir'), ('Maison plain-pied', 'Maison plain-pied'), ('Mas de Provence', 'Mas de Provence'), ('Résidence séniors', 'Résidence séniors')], default='Maison', max_length=250),
        ),
    ]