from django.urls import path
from .views import CustomUserCreate, LogoutView, VerifiedMailView, InspectUserView

app_name = 'users'

urlpatterns = [
    path('register', CustomUserCreate.as_view(), name="register_user"),
    path('logout', LogoutView.as_view(), name='auth_logout'),
    path('verify/<act_token>', VerifiedMailView.as_view(), name='mail_verify'),
    path('inspect', InspectUserView.as_view(), name='mail_verify'),
]