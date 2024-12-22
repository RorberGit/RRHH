from rest_framework import serializers
from empleados.api.serializers.share_serializers import ListFullEmpleadosSerializers, ResumenEmpleadoSerializers
from .models import Usuario as User


class RegisterUserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "empleados",
                  "password", "is_active", "is_admin"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
            empleados=validated_data["empleados"],
            is_active=validated_data["is_active"],
            is_admin=validated_data["is_admin"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get("username", instance.username)
        instance.email = validated_data.get("email", instance.email)
        instance.empleados = validated_data.get(
            "empleados", instance.empleados)
        instance.is_active = validated_data.get(
            "is_active", instance.is_active)
        instance.is_admin = validated_data.get("is_admin", instance.is_admin)
        instance.set_password(validated_data.get(
            "password", instance.password))
        instance.save()
        return instance


class ViewUserSerializers(serializers.ModelSerializer):
    empleados = ResumenEmpleadoSerializers()

    class Meta:
        model = User
        # fields = ('id', 'username', 'email', 'first_name', 'last_name')
        # fields = '__all__'
        exclude = ["password"]
