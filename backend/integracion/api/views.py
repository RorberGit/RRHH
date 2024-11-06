from rest_framework import viewsets
from .models import Orm, Afp, Defensa
from .serialiers import OrmSerializer, AfpSerializer, DefensaSerializer


class OrmView(viewsets.ModelViewSet):
    serializer_class = OrmSerializer
    queryset = Orm.objects.all()


class AfpView(viewsets.ModelViewSet):
    serializer_class = AfpSerializer
    queryset = Afp.objects.all()


class DefensaView(viewsets.ModelViewSet):
    serializer_class = DefensaSerializer
    queryset = Defensa.objects.all()
