from rest_framework import serializers

from empleados.models import Empleados
# from empleados.serializers import EmpleadosSerializers
from organizacion.api.models import AreaDpto, Cargos, Proyectos


class ShareProyectosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyectos
        fields = ["id", "nombre"]


class ShareCargosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargos
        fields = ["id", "nombre"]


class ShareAreaDptoSerializer(serializers.ModelSerializer):
    # jefe = EmpleadosSerializers(many=False, read_only=False)

    class Meta:
        model = AreaDpto
        fields = ["id", "nombre"]


class ListFullEmpleadosSerializers(serializers.ModelSerializer):
    #    proyecto = ShareProyectosSerializer()
 #   cargo = ShareCargosSerializer()
  #  areadpt = ShareAreaDptoSerializer()

    class Meta:
        model = Empleados
        fields = "__all__"


class ResumenEmpleadoSerializers(serializers.ModelSerializer):
    proyecto = ShareProyectosSerializer()
    cargo = ShareCargosSerializer()
    areadpt = ShareAreaDptoSerializer()

    class Meta:
        model = Empleados
        fields = ["id", "nip", "nombre", "apellido_paterno",
                  "apellido_materno", "ci", "proyecto", "cargo", "areadpt", "foto", "mano_obra", "estado", "is_active"]


class ListEmpleadosSerializers(serializers.ModelSerializer):
    proyecto = ShareProyectosSerializer()
    cargo = ShareCargosSerializer()
    areadpt = ShareAreaDptoSerializer()

    class Meta:
        model = Empleados
        fields = ["id", "nip", "nombre", "apellido_paterno",
                  "apellido_materno", "ci", "proyecto", "cargo", "areadpt", "is_active"]
