from rest_framework import serializers

from empleados.api.share_serializers import ListEmpleadosSerializers


from .models import HoraEntradaSalida, RegistroEntradaSalida


class ListRegistroEntradaSalidaSerializer(serializers.ModelSerializer):
    empleado = ListEmpleadosSerializers()

    class Meta:
        model = RegistroEntradaSalida
        fields = "__all__"


class CreateRegistroEntradaSalidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroEntradaSalida
        fields = "__all__"


class HoraEntradaSalidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoraEntradaSalida
        fields = "__all__"
