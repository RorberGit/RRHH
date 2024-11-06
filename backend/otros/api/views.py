from rest_framework import viewsets

from .models import Pase, Procedencias, Antdd, Ne, AjtVjt, Turno
from .serialiers import (
    PaseSerializer,
    ProcedenciasSerializer,
    AntddSerializer,
    NeSerializer,
    AjtVjtSerializer,
    TurnoSerializer,
)


class ProcedenciasView(viewsets.ModelViewSet):
    serializer_class = ProcedenciasSerializer
    queryset = Procedencias.objects.all()


class AntddView(viewsets.ModelViewSet):
    serializer_class = AntddSerializer
    queryset = Antdd.objects.all()


class NeView(viewsets.ModelViewSet):
    serializer_class = NeSerializer
    queryset = Ne.objects.all()


class AjtVjtView(viewsets.ModelViewSet):
    serializer_class = AjtVjtSerializer
    queryset = AjtVjt.objects.all()


class TurnoView(viewsets.ModelViewSet):
    serializer_class = TurnoSerializer
    queryset = Turno.objects.all()


class PaseView(viewsets.ModelViewSet):
    serializer_class = PaseSerializer
    queryset = Pase.objects.all()
