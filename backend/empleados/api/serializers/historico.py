from rest_framework import serializers

from empleados.models.historico import HistoricoEmpleados


class HistoricoSerializers(serializers.ModelSerializer):
    class Meta:
        model = HistoricoEmpleados
        fields = "__all__"
