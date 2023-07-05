from django.urls import include,path
from rest_framework import routers
from ahome import views

router = routers.DefaultRouter()
router.register(r'state', views.StateViewSet)
router.register(r'city', views.CityViewSet)
router.register(r'country', views.CountryViewSet)
router.register(r'image', views.ImageViewSet)
urlpatterns = [
    path('property', views.PropertieViewSet.as_view(), name='property_view'),
    path('plan', views.PlanPropertySet.as_view(), name='plan_view'),
    path('', include(router.urls)),
]