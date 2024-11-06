# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProvinciasSerializer, MunicipiosSerializer
from .models import Provincia, Municipio


class ProvinciaViewSet(viewsets.ModelViewSet):
    """
    Vistas para controlar las provincias
    """
    serializer_class = ProvinciasSerializer
    queryset = Provincia.objects.all()

class MunicipioViewSet(viewsets.ModelViewSet):
    """
    Vistas para controlar las municipios
    """
    serializer_class = MunicipiosSerializer
    queryset = Municipio.objects.all()
