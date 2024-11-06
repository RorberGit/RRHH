from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from rest_framework import filters, generics, permissions, status
from rest_framework.exceptions import (
    AuthenticationFailed,
    NotAcceptable,
    PermissionDenied,
)
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Usuario as User
from .serializers import RegisterUserSerializers, ViewUserSerializers
from .token import get_tokens_for_user


class CreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterUserSerializers


class UpdateUser(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterUserSerializers


class LoginUser(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        """
        Funcion que permite guardar los registros del usuario
        """
        # data = request.data
        username = request.data.get("username")
        password = request.data.get("password")

        if not username:
            raise NotAcceptable("Nombre de usuario necesario")

        if not password:
            raise NotAcceptable("La contraseña es necesaria")

        try:
            check_user = User.objects.get(username=username)
        except User.DoesNotExist as e:
            raise AuthenticationFailed(f"Error al buscar usuario: {str(e)}") from e

        if check_user is None:
            raise AuthenticationFailed("Usuario no existe.")

        if not check_user.check_password(password):
            raise AuthenticationFailed("Contraseña incorrecta.")

        user = authenticate(username=username, password=password)

        if user is not None:
            token = get_tokens_for_user(user)
            serializer_user = ViewUserSerializers(user)
            login(request, user)
            return Response(
                {**serializer_user.data, **token}, status=status.HTTP_200_OK
            )

        return Response(
            {"detail": "Credenciales incorrectas."},
            status=status.HTTP_401_UNAUTHORIZED,
        )


class LogoutUser(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        """Cerrar session"""
        try:
            refresh_token = request.data.get("refresh_token")
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
                logout(request)
                return Response(
                    {"message": "Cierre de Sesión Exitoso"}, status=status.HTTP_200_OK
                )

            raise AuthenticationFailed("Token de actualización no proporcionado")
        except AuthenticationFailed as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ListUser(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        """Function printing python version."""
        try:
            if not request.user.is_authenticated:
                raise PermissionDenied("User is not authenticated")
            queryset = User.objects.filter(~Q(username="admin"))
            serializer_class = ViewUserSerializers(queryset, many=True)
            return Response(serializer_class.data, status=status.HTTP_200_OK)
        except PermissionDenied as e:
            return Response({"error": str(e)}, status=status.HTTP_403_FORBIDDEN)


class RetrieveUser(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = ViewUserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.OrderingFilter]
