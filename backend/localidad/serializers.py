from rest_framework import serializers
from .models import Provincia, Municipio


class ProvinciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = "__all__"


class MunicipiosSerializer(serializers.ModelSerializer):
    provincia = ProvinciasSerializer(many=False)

    class Meta:
        model = Municipio
        fields = "__all__"
