from django.contrib.auth.models import User, Group
from rest_framework import viewsets, views
from rest_framework import permissions
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from ahome.models import Country
from ahome.serializers import UserSerializer, GroupSerializer, CountrySerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class CountryViewSet(views.APIView):
    def get(self, request, **kwargs):
        pk = kwargs.get('pk', None)
        if pk:
            country_list = get_object_or_404(Country, pk=pk)
        else:
            country_list = Country.objects.all()
        return Response(CountrySerializer(country_list, many=True).data)

