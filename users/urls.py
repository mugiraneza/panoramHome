from django.urls import path
from .views import CustomUserCreate,LogoutView

app_name = 'users'

urlpatterns = [
    path('register', CustomUserCreate.as_view(), name="register_user"),
    path('logout', LogoutView.as_view(), name='auth_logout'),
]