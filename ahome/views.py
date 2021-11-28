from django.contrib.auth.models import User, Group
from rest_framework import viewsets, views, status
from rest_framework import permissions
from rest_framework.generics import get_object_or_404
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response

from ahome.models import Country, State, City, Propertie, PlanProperty
from ahome.serializers import UserSerializer, GroupSerializer, CountrySerializer, StateSerializer, CitySerializer, \
    PropertieSerializer, PlanSerializer

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

    def get(self, request, *args, **kwargs):
        pk = request.GET.get('id', None)
        if pk:
            property_list = get_object_or_404(Propertie, pk=pk)
            many = False
        else:
            property_list = Propertie.objects.all()
            many = True
        serialised_data = PropertieSerializer(property_list, many=many, context={"request": request})
        return Response(serialised_data.data, status=status.HTTP_200_OK)

    def post(self, request, **kwargs):
        serializer = PropertieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, **kwargs):
        if "id" in request.data.keys():
            id_property = request.GET.get("id", None)
            instance = get_object_or_404(Propertie, id=id_property)
            serialized_data = PropertieSerializer(data=request.data, instance=instance, partial=True,
                                                  context={"request": request, "instance": instance})
            if not serialized_data.is_valid():
                return Response(serialized_data.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                serialized_data.save()
                return Response(serialized_data.data, status=status.HTTP_200_OK)
        else:
            return Response({"provide id for update"}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, **kwargs):
        pk = request.GET.get('id', None)
        if pk:
            property_list = get_object_or_404(Propertie, pk=pk)
            property_list.delete()
            return Response({"Propertie successfully deleted!!!"}, status=status.HTTP_200_OK)
        else:
            return Response({"Id should be provided"}, status=status.HTTP_400_BAD_REQUEST)


class PlanPropertySet(views.APIView):
    parser_classes = (MultiPartParser, FormParser,)

    def get(self, request, *args, **kwargs):
        pk = request.GET.get('propertie_id', None)
        if pk:
            plans_list = get_object_or_404(PlanProperty, property_id=pk)
        else:
            return Response(
                {"errors": "Veuillez indiquer l'identifiant de votre proprieté propertie_id"},
                status=status.HTTP_400_BAD_REQUEST
            )
        serialised_data = PlanSerializer(plans_list, many=False, context={"request": request})
        return Response(serialised_data.data, status=status.HTTP_200_OK)

    def post(self, request, **kwargs):
        serialized_data = PlanSerializer(data=request.data)
        if not serialized_data.is_valid():
            return Response(serialized_data.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_200_OK)

    def put(self, request, **kwargs):
        if "propertie_id" not in request.data.keys():
            return Response({"provide \"id\" for update"}, status=status.HTTP_400_BAD_REQUEST)
        elif "floorNum" not in request.data.keys():
            return Response({"provide \"floorNum\" for update"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            propertie_id = request.GET.get("propertie_id", None)
            instance = get_object_or_404(PlanProperty, propertie_id=propertie_id)
            serialized_data = PlanSerializer(data=request.data, instance=instance, partial=True,
                                                  context={"request": request, "instance": instance})
            if not serialized_data.is_valid():
                return Response(serialized_data.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                serialized_data.save()
                return Response(serialized_data.data, status=status.HTTP_200_OK)

    def delete(self, request, **kwargs):
        pk = request.GET.get('id', None)
        propertie_id = request.GET.get('propertie_id', None)
        if pk:
            plan_list = PlanProperty.objects.all().filter(pk=pk)
            plan_list.delete()
            return Response({"Propertie Plan successfully deleted!!!"}, status=status.HTTP_200_OK)
        elif propertie_id:
            plan_list = PlanProperty.objects.all().filter(property_id=propertie_id)
            plan_list.delete()
            return Response({"Propertie Plan successfully deleted!!!"}, status=status.HTTP_200_OK)
        else:
            return Response({"Plan \"Id\" or property id \"propertie_id\" should be provided"},
                            status=status.HTTP_400_BAD_REQUEST)
