from datetime import datetime, timezone

from django.contrib.auth.models import User, Group
from rest_framework import serializers

from ahome.models import Country, City, State, Propertie


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    count_properties = serializers.SerializerMethodField("count_property")

    def count_property(self, city):
        return city.propertie.count()

    class Meta:
        model = City
        fields = ["id", "name", "description", "count_properties", "photo"]


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'


class PropertieSerializer(serializers.ModelSerializer):
    create_since_day = serializers.SerializerMethodField("create_since", read_only=True)
    created_at = serializers.DateTimeField(read_only=True)

    def create_since(self, property):
        difference = datetime.now(timezone.utc) - property.created_at
        return difference.days

    class Meta:
        model = Propertie
        fields = ["id", "address", "name", "description", "bedroom", "surface", "garage", "cost", "room", "type",
                  "status", "airCond", "balcony", "internet", "dishwasher", "bedding", "cableTV", "parking", "pool",
                  "fridge", "video", "localisation", "city", "created_at", "create_since_day"]
