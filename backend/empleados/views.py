from django.db.models import Max
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, generics, permissions
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound, NotAcceptable

from empleados.api.share_serializers import ListFullEmpleadosSerializers, ResumenEmpleadoSerializers

from .models.empleados import Empleados
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

        #! Parametros de consulta
        proyecto = request.query_params.get('proyecto')
        is_active = request.query_params.get('is_active')

        #! Inicializar filtro de busqueda
        filters = Q()

        #! Aplicar filtros si se proporcionan
        if proyecto:
            filters &= Q(proyecto__nombre=proyecto)

        if is_active:
            filters &= Q(is_active=is_active)

        #! Obtener empleados según filtro establecido
        empleados = Empleados.objects.filter(filters)

        #! Verificar si hay resultados
        if not empleados.exists():
            raise NotFound(
                "No se encontraron empleados con los criterios especificados.")

        #! Serializar los resultados
        serializer = ListFullEmpleadosSerializers(empleados, many=True)

        #! Retornar los resultados
        return Response(serializer.data)


class GetOneEmpleado(APIView):
    """Generar un APIView que debuelva una un empleado
    """

    def get(self, request):

        #! Parametros de consulta
        id = request.query_params.get('id')
        nip = request.query_params.get('nip')
        ci = request.query_params.get('ci')
        proyecto = request.query_params.get('proyecto')
        is_active = request.query_params.get('is_active')

        #! Inicializar filtro de busqueda
        filters = Q()

        #! Aplicar filtros si se proporcionan
        if id:
            filters &= Q(id=id)
        if nip:
            filters &= Q(nip=nip)
        if ci:
            filters &= Q(ci=ci)
        if proyecto:
            filters &= Q(proyecto__nombre=proyecto)
        if is_active:
            filters &= Q(is_active=is_active)

        #! Si no s ha especificado ningún criterio de busqueda
        if not filters:
            raise NotAcceptable("Filtros no especificados")

        #! Obtener empleados según filtro establecido
        try:
            empleados = Empleados.objects.get(filters)

            #! Serializar los resultados
            serializer = ResumenEmpleadoSerializers(empleados)

        except Empleados.DoesNotExist:
            raise NotFound(
                "No se econtro empleado con el criterio especificado")

        #! Retornar los resultados
        return Response(serializer.data)


class CreateEmpleados(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        # Obtener el último número de nip existente
        last_nip = Empleados.objects.aggregate(
            max_number=Max("nip"))["max_number"]

        # Si no hay empleados, comenzamos desde 1
        if last_nip is None:
            last_nip = 0

        # Asignar el nuevo nip al siguiente número máximo
        request.data['nip'] = last_nip + 1

        # Crear el serializador con los datos actualizados
        serializer = EmpleadosSerializers(data=request.data)

        # Validar y guardar el nuevo empleado
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateEmpleados(generics.RetrieveUpdateAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class DeleteEmpleados(generics.RetrieveDestroyAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class MaxNIP(APIView):
    def get(self, _):
        """obtener maximo numero"""
        max_nip = Empleados.objects.all().aggregate(
            max_number=Max("nip"))["max_number"]
        return Response({"max_nip": max_nip})
