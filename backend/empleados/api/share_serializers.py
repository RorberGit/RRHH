from rest_framework import serializers

from empleados.models import Empleados
from empleados.serializers import EmpleadosSerializers
from organizacion.api.models import AreaDpto, Cargos, Proyectos


class ShareProyectosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyectos
        fields = "__all__"


class ShareCargosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargos
        fields = "__all__"


class ShareAreaDptoSerializer(serializers.ModelSerializer):
    jefe = EmpleadosSerializers(many=False, read_only=False)

    class Meta:
        model = AreaDpto
        fields = "__all__"


class ListFullEmpleadosSerializers(serializers.ModelSerializer):
    proyecto = ShareProyectosSerializer()
    cargo = ShareCargosSerializer()
    areadpt = ShareAreaDptoSerializer()

    class Meta:
        model = Empleados
        fields = "__all__"
