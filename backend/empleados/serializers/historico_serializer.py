from rest_framework import serializers

from empleados.models.historico import Historico_Empleados


class HistoricoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Historico_Empleados
        fields = "__all__"
