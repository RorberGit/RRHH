from rest_framework import serializers

from .models.empleados import Empleados


class EmpleadosSerializers(serializers.ModelSerializer):
    class Meta:
        model = Empleados
        fields = "__all__"
        # read_only_fields = ('create_at', )


class ListEmpleadosSerializers(serializers.ModelSerializer):
    proyecto = serializers.StringRelatedField()

    class Meta:
        model = Empleados
        fields = ["id", "nip", "nombre", "apellido_paterno",
                  "apellido_materno", "ci", "proyecto", "is_active"]
