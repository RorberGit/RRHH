from rest_framework import serializers

from .models import Orm, Afp, Defensa


class OrmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orm
        fields = "__all__"


class AfpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Afp
        fields = "__all__"


class DefensaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Defensa
        fields = "__all__"
