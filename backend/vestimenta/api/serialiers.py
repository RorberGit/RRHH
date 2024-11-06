from rest_framework import serializers

from .models import Pantalon, Camisa, Calzado


class PantalonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pantalon
        fields = "__all__"


class CamisaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camisa
        fields = "__all__"


class CalzadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calzado
        fields = "__all__"
