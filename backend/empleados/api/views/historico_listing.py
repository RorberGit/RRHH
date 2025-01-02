from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.exceptions import NotFound
from django.db.models import Q

from empleados.api.serializers.historico import HistoricoSerializers
from empleados.models.historico import HistoricoEmpleados


class ListingView(APIView):
    """Listar todos los registros del historico
    """

    def get(self, request):
        #! Obtener el empleado por empleado_id
        id_empleado = request.query_params.get('id')

        #! Iniciar filtro de busqueda
        filters = Q()

        #! Aplicar filtros si existe
        if id_empleado:
            filters &= Q(id_empleado=id_empleado)

        #! Obtener empleados segun filtro establecido
        #! ordenar por fecha de creacion desc
        historico = HistoricoEmpleados.objects.filter(
            filters).order_by('-updated_at')

        #! Verificar si hay resultados
        if not historico.exists():
            raise NotFound(
                "Registros no encontrados")

        #! Serializar los resultados
        serializer = HistoricoSerializers(historico, many=True)

        #! Retornar los resultados
        return Response(serializer.data, status=HTTP_200_OK)
