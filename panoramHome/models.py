from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils import timezone

PROPERTIES_STATUS_CHOISES = [
    ('for sale', 'For Sale'),
    ('for rent', 'For rent'),
]
PROPERTIES_TYPE_CHOICES = [
    ('home', 'Home'),
]


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

    def __str__(self):
        return self.name


class Propertie(models.Model):
    city = models.ForeignKey(City, related_name='propertie', on_delete=models.CASCADE)
    address = models.CharField(max_length=250)
    name = models.CharField(max_length=250, default="Real House Luxury Villa")
    description = models.TextField(max_length=300)
    bedroom = models.IntegerField(default=0)
    bathroom = models.IntegerField(default=0)
    surface = models.IntegerField(default=0)
    garage = models.IntegerField(default=0)
    cost = models.IntegerField(default=0)
    room = models.IntegerField(default=0)
    type = models.CharField(default="home", choices=PROPERTIES_TYPE_CHOICES)
    status = models.CharField(default="for sale", choices=PROPERTIES_STATUS_CHOISES)
    airCond = models.BooleanField(default=False)
    balcony = models.BooleanField(default=False)
    internet = models.BooleanField(default=False)
    dishwasher = models.BooleanField(default=False)
    bedding = models.BooleanField(default=False)
    cableTV = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    fridge = models.BooleanField(default=False)
    video = models.FileField(
        upload_to='videos_uploaded',
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]
    )
    localisation = models.CharField(max_length=150, null=False, blank=False)
    created_at = models.DateTimeField(editable=False)
    modified_at = models.DateTimeField()

    ''' On save, update timestamps '''

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Propertie, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class ImageProperty(models.Model):
    property = models.ForeignKey(Propertie, related_name="imageProperty", on_delete=models.CASCADE)
    img = models.ImageField(upload_to="propertyImg")


class PlanProperty(models.Model):
    property = models.ForeignKey(Propertie, related_name="imageProperty", on_delete=models.CASCADE)
    plan = models.ImageField(upload_to="propertyPlan")
    floorNum = models.IntegerField()
