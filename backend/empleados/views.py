from django.db.models import Max
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, generics, permissions
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound

from empleados.api.share_serializers import ListFullEmpleadosSerializers

from .models import Empleados
from .serializers import EmpleadosSerializers


class ListEmpleados(generics.ListAPIView):
    queryset = Empleados.objects.all().order_by("created_at")
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.OrderingFilter]


class RetrieveEmpleados(APIView):
    """Generar un APIView que debuelva una lista de empleados
    """

    def get(self, request):

        # Parametros de consulta
        one = request.query_params.get('one')
        nip = request.query_params.get('nip')
        proyecto = request.query_params.get('proyecto')

        #! Inicializar filtro de busqueda
        filters = Q()

        # Aplicar filtros si se proporcionan
        if nip:
            filters &= Q(nip=nip)
        if proyecto:
            filters &= Q(proyecto__nombre=proyecto)

        # Obtener empleados según filtro establecido
        # Si one existe filtrar con get() sin no, con filter()
        if one:
            try:
                empleados = Empleados.objects.get(filters)

                # Serializar los resultados
                serializer = ListFullEmpleadosSerializers(empleados)

            except Empleados.DoesNotExist:
                raise NotFound(
                    "No se econtro empleado con el criterio especificado")
        else:
            empleados = Empleados.objects.filter(filters)

            # Verificar si hay resultados
            if not empleados.exists():
                raise NotFound(
                    "No se encontraron empleados con los criterios especificados.")

            # Serializar los resultados
            serializer = ListFullEmpleadosSerializers(empleados, many=True)

        # Retornar los resultados
        return Response(serializer.data)


class CreateEmpleados(generics.CreateAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class UpdateEmpleados(generics.RetrieveUpdateAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class DeleteEmpleados(generics.RetrieveDestroyAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class FilterEmpleados(generics.ListAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ["id", "nombre", "ci"]
    # para poner en el filtrado todos los campos del serializaers
    """ filterset_fields = serializer_class.Meta.fields """
    # ordering_fields = ['edad']
    ordering = ["created_at"]


class MaxNIP(APIView):
    def get(self, _):
        """obtener maximo numero"""
        max_nip = Empleados.objects.all().aggregate(
            max_number=Max("nip"))["max_number"]
        return Response({"max_nip": max_nip})


class RetriveEmpleadosByNip(APIView):
    def get(self, _, nip):
        """Recuperar registro de empleados desde campo NIP

        Args:
            nip (numeric): Número de Identificación Personal
        """
        try:
            empleados = Empleados.objects.get(nip=nip)
        except Empleados.DoesNotExist as e:
            raise NotFound(f"Registro no encontrado para NIP: {nip}") from e

        serializer = ListFullEmpleadosSerializers(empleados)

        return Response(serializer.data)
