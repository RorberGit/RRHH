from rest_framework import viewsets
from .models import Especialidades, Proyectos, AreaDpto, Cargos
from .serialiers import (
    EspecialidadesSerializer,
    ProyectosSerializer,
    AreaDptoSerializer,
    CargosSerializer,
)


class ProyectosView(viewsets.ModelViewSet):
    serializer_class = ProyectosSerializer
    queryset = Proyectos.objects.all()


class AreaDptoView(viewsets.ModelViewSet):
    serializer_class = AreaDptoSerializer
    queryset = AreaDpto.objects.all()


class CargosView(viewsets.ModelViewSet):
    serializer_class = CargosSerializer
    queryset = Cargos.objects.all()


class EspecialidadesView(viewsets.ModelViewSet):
    serializer_class = EspecialidadesSerializer
    queryset = Especialidades.objects.all()
