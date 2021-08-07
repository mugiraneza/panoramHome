from django.contrib.auth.models import User, Group
from rest_framework import viewsets, views, status
from rest_framework import permissions
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from ahome.models import Country, State, City, Propertie
from ahome.serializers import UserSerializer, GroupSerializer, CountrySerializer, StateSerializer, CitySerializer, \
    PropertieSerializer


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


# class CountryViewSet(views.APIView):
#     def get(self, request, **kwargs):
#         pk = kwargs.get('id', None)
#         if pk:
#             country_list = get_object_or_404(Country, pk=pk)
#         else:
#             country_list = Country.objects.all()
#         return Response(CountrySerializer(country_list, many=True).data)
#
#     def post(self, request, **kwargs):
#         serializer = CountrySerializer(request.data, many=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def put(self, request, **kwargs):
#         pk = kwargs.get('pk', None)
#         if pk:
#             country_list = get_object_or_404(Country, pk=pk)
#         else:
#             return Response()
#         return Response(CountrySerializer(country_list, many=True).data)
class CountryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Country to be viewed or edited.
    """
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class StateViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows State to be viewed or edited.
    """
    queryset = State.objects.all()
    serializer_class = StateSerializer


class CityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows City to be viewed or edited.
    """
    queryset = City.objects.all()
    serializer_class = CitySerializer


class PropertieViewSet(views.APIView):

    def get(self, request, **kwargs):
        pk = kwargs.get('id', None)
        if pk:
            property_list = get_object_or_404(Propertie, pk=pk)
        else:
            property_list = Propertie.objects.all()
        return Response(PropertieSerializer(property_list, many=True).data)

    def post(self, request, **kwargs):
        print(request.data)
        serializer = CountrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, **kwargs):
        pk = kwargs.get('pk', None)
        print(kwargs.get('pk', None))
        print(pk)
        # if pk:
        #     country_list = get_object_or_404(Country, pk=pk)
        # else:
        #     return Response()
        # return Response(CountrySerializer(country_list, many=True).data)

    def delete(self, request, pk=None, **kwargs):
        pass
