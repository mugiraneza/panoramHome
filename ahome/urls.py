from django.conf.urls import url
from django.urls import include, path
from rest_framework import routers
from ahome import views

urlpatterns = [
    url(r'^country_list/?$', views.CountryViewSet.as_view(), name='country_list_view'),
]