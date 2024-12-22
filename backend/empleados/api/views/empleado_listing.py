from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

from django.db.models import Q

from empleados.api.serializers.share_serializers import ListFullEmpleadosSerializers
from empleados.models.empleados import Empleados


class ListingView(APIView):
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
