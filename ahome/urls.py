from django.conf.urls import url
from django.urls import include, path
from rest_framework import routers
from ahome import views


router = routers.DefaultRouter()
router.register(r'state', views.StateViewSet)
router.register(r'city', views.CityViewSet)
router.register(r'country', views.CountryViewSet)
urlpatterns = [
    # url(r'^country/?$', views.CountryViewSet.as_view(), name='country_list_view'),
    url('', include(router.urls)),
]