from rest_framework import viewsets
from .models import Pantalon, Camisa, Calzado
from .serialiers import PantalonSerializer, CamisaSerializer, CalzadoSerializer


class PantalonView(viewsets.ModelViewSet):
    serializer_class = PantalonSerializer
    queryset = Pantalon.objects.all()


class CamisaView(viewsets.ModelViewSet):
    serializer_class = CamisaSerializer
    queryset = Camisa.objects.all()


class CalzadoView(viewsets.ModelViewSet):
    serializer_class = CalzadoSerializer
    queryset = Calzado.objects.all()
