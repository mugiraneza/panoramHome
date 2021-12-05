from abc import ABC
from datetime import datetime, timezone
from email.mime import image

import plan as plan
from django.contrib.auth.models import User, Group
from rest_framework import serializers

from ahome.models import Country, City, State, Propertie, PlanProperty, ImageProperty


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
        fields = ["id", "name", "state", "description", "count_properties", "photo"]


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageProperty
        fields = '__all__'


class ImageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageProperty
        fields = ['img']

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanProperty
        fields = ["property", "plan", "floorNum"]

    # def create(self, validated_data):
    #     print(validated_data)
    #     blogs = PlanProperty.objects.create(id=validated_data['id'])
    #     image = validated_data.pop('plan')
    #     for img in image:
    #         photo = PlanProperty.objects.create(image=img, blogs=blogs, **validated_data)
    #     return photo


class PropertieSerializer(serializers.ModelSerializer):
    create_since_day = serializers.ReadOnlyField(source="create_since", read_only=True)
    created_at = serializers.DateTimeField(read_only=True)
    city_name = serializers.CharField(source='city.name', read_only=True)
    planProperties = PlanSerializer(read_only=True, many=True)
    imageProperties = ImageListSerializer(read_only=True, many=True)

    class Meta:
        model = Propertie
        fields = (
            "id", "address", "name", "description", "bathroom", "bedroom", "surface", "garage", "cost", "room", "type",
            "status", "airCond", "balcony", "internet", "dishwasher", "bedding", "cableTV", "parking", "pool",
            "fridge", "video", "localisation", "city", "city_name", "created_at", "presentation_image",
            "create_since_day", "planProperties", "imageProperties")
