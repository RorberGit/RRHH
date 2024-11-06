from rest_framework import serializers

from .models import Pase, Procedencias, Antdd, Ne, AjtVjt, Turno


class ProcedenciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Procedencias
        fields = "__all__"


class AntddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Antdd
        fields = "__all__"


class NeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ne
        fields = "__all__"


class AjtVjtSerializer(serializers.ModelSerializer):
    class Meta:
        model = AjtVjt
        fields = "__all__"


class TurnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turno
        fields = "__all__"


class PaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pase
        fields = "__all__"
