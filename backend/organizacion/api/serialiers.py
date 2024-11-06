from rest_framework import serializers

from empleados.serializers import EmpleadosSerializers

from .models import Cargos, Especialidades, Proyectos, AreaDpto


class ProyectosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyectos
        fields = "__all__"


class AreaDptoSerializer(serializers.ModelSerializer):
    jefe = EmpleadosSerializers(many=False, read_only=False)

    class Meta:
        model = AreaDpto
        fields = "__all__"


class CargosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargos
        fields = "__all__"


class EspecialidadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidades
        fields = "__all__"
