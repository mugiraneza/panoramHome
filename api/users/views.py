# from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import NewUser
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.db import IntegrityError

from .utility import get_client_ip
from .builder import build_login_mail

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.save()
                if user:
                    json = serializer.data
                    return Response(json, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({"email ou nom d'utilisateur déja utilisé"}, status=status.HTTP_409_CONFLICT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class InspectUserView(APIView):
    def get(self, request, *args, **kwargs):
        context = get_client_ip(request)
        build_login_mail(request.META.get('user_name'), context.user_agent, context.ip)
        return Response({"send"}, status=status.HTTP_200_OK)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response({"vous êtes maintenant déconnecté"}, status=status.HTTP_400_BAD_REQUEST)


class VerifiedMailView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, act_token):
        try:
            profile_obj = NewUser.objects.filter(act_token=act_token).first()

            if profile_obj:
                if profile_obj.is_active:
                    return Response({'Votre compte est déjà vérifié...'}, status=status.HTTP_400_BAD_REQUEST)
                profile_obj.enable_user()
                profile_obj.save()
                return Response({'Votre compte a été vérifié.'}, status=status.HTTP_200_OK)
            else:
                return Response({'Erreur...'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response({'Erreur...'}, status=status.HTTP_400_BAD_REQUEST)
