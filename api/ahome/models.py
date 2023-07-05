from datetime import datetime, timezone
from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils import timezone
import uuid,os
PROPERTIES_STATUS_CHOISES = [
    ('for sale', 'for sale'),
    ('for rent', 'for rent'),
]
PROPERTIES_TYPE_CHOICES = [
    ('Appartement', 'Appartement'),
    ('Appartement Duplex', 'Duplex'),
    ('Appartement Triplex', 'Triplex'),
    ('Appartement Souplex', 'Souplex'),
    ('Maison', 'Maison***'),
    ('Maison à étages', 'Maison à étages'),
    ('Maison à toit plat', 'Maison à toit plat'),
    ('Maison bioclimatique', 'Maison bioclimatique'),
    ('Maison d’architecte', 'Maison d’architecte'),
    ('Maison duplex', 'Maison duplex'),
    ('Maison en bois', 'Maison en bois'),
    ('Maison en lotissement', 'Maison en lotissement'),
    ('Maison en pierre', 'Maison en pierre'),
    ('Maison en VEFA', 'Maison en VEFA'),
    ('Maison évolutive', 'Maison évolutive'),
    ('Maison individuelle', 'Maison individuelle'),
    ('Maison insolite', 'Maison insolite'),
    ('Maison coloniale', 'Maison coloniale'),
    ('Maison jumelée', 'Maison jumelée'),
    ('Maison loft', 'Maison loft'),
    ('Maisons longères', 'Maisons longères'),
    ('Maison low cost', 'Maison low cost'),
    ('Maison meulière', 'Maison meulière'),
    ('Maison niveaux', 'Maison niveaux'),
    ('Maison Phénix', 'Maison Phénix'),
    ('Maison préfabriquée', 'Maison préfabriquée'),
    ('Maison prête à finir', 'Maison prête à finir'),
    ('Maison plain-pied', 'Maison plain-pied'),
    ('Mas de Provence', 'Mas de Provence'),
    ('Résidence séniors', 'Résidence séniors'),
]
def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join(instance.directory_string_var, filename)



class Country(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=300)

    def __str__(self):
        return self.name


class State(models.Model):
    country = models.ForeignKey(Country, related_name='states', on_delete=models.CASCADE)
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=300)

    def __str__(self):
        return self.name


class City(models.Model):
    state = models.ForeignKey(State, related_name='city', on_delete=models.CASCADE)
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=300)
    photo = models.ImageField(
        upload_to=get_file_path,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'png', 'gif'])]
    )
    directory_string_var='city_photo'
    
    def __str__(self):
        return self.name


class Propertie(models.Model):
    city = models.ForeignKey(City, related_name='propertie', on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=250, null=False, blank=False)
    name = models.CharField(max_length=250, default="Real House Luxury Villa")
    description = models.TextField(max_length=300, null=False, blank=False)
    bedroom = models.IntegerField(default=0)
    bathroom = models.IntegerField(default=0)
    surface = models.IntegerField(default=0)
    garage = models.IntegerField(default=0)
    cost = models.IntegerField(default=0)
    room = models.IntegerField(default=0)
    type_bien = models.CharField(default="Maison", max_length=250, choices=PROPERTIES_TYPE_CHOICES)
    status = models.CharField(default="for sale", max_length=250, choices=PROPERTIES_STATUS_CHOISES)
    airCond = models.BooleanField(default=False)
    balcony = models.BooleanField(default=False)
    internet = models.BooleanField(default=False)
    dishwasher = models.BooleanField(default=False)
    bedding = models.BooleanField(default=False)
    cableTV = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    fridge = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    video = models.FileField(
        upload_to=get_file_path,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]
    )
    directory_string_var='videos_uploaded'
    localisation = models.CharField(max_length=150, null=False, blank=False)
    created_at = models.DateTimeField(editable=False)
    modified_at = models.DateTimeField()
    presentation_image = models.ImageField(
        upload_to='property_photo',
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpeg', 'jpg', 'png', 'gif'])]
    )
    is_published = models.BooleanField(default=True)

    @property
    def create_since(self):
        difference = datetime.now(timezone.utc) - self.created_at
        return difference.days

    ''' On save, update timestamps '''

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        self.modified_at = timezone.now()
        return super(Propertie, self).save(*args, **kwargs)

    def disable_enable_publication(self):
        self.is_published = not self.is_published

    def __str__(self):
        return self.name


class ImageProperty(models.Model):
    property = models.ForeignKey(Propertie, related_name="imageProperties", on_delete=models.CASCADE)
    img = models.ImageField(upload_to=get_file_path)
    directory_string_var="propertyImg"
    def __str__(self):
        return self.img
    
class PlanProperty(models.Model):
    property = models.ForeignKey(Propertie, related_name="planProperties", on_delete=models.CASCADE)
    plan = models.ImageField(upload_to=get_file_path)
    directory_string_var="propertyPlan"
    floorNum = models.IntegerField()
    
    
    class Meta:
        unique_together = ("property", "floorNum")
