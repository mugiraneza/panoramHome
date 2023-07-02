# from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import NewUser
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.db import IntegrityError


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
                return Response({"email ou nom d'utilisateur deja utilisé"}, status=status.HTTP_409_CONFLICT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class VerifiedMailView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, act_token):
        try:
            profile_obj = NewUser.objects.filter(act_token=act_token).first()

            if profile_obj:
                if profile_obj.is_active:
                    return Response({'Your account is already verified...'}, status=status.HTTP_400_BAD_REQUEST)
                profile_obj.is_active = True
                profile_obj.save()
                return Response({'Your account has been verified.'}, status=status.HTTP_200_OK)
            else:
                return Response({'Error...'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response({'Error...'}, status=status.HTTP_400_BAD_REQUEST)
