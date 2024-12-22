from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.exceptions import NotFound
from django.db.models import Q

from empleados.api.serializers.historico import HistoricoSerializers
from empleados.models.historico import HistoricoEmpleados

class RetrieveView(APIView):
    """Solo un registro del historico
    """

    def get(self, request):
        #! Obtener el empleado por empleado_id
        id = request.query_params.get('id')

        #! Iniciar filtro de busqueda
        filters = Q()

        #! Aplicar filtros si existe
        if id:
            filters &= Q(id=id)

        #! Emitir un error si no se encuentra ningun empleado
        if not filters:
            raise NotFound("Criterios de busqueda no especificados.")

        #! Obtener empleados segun filtro establecido, 
        try:
            historico = HistoricoEmpleados.objects.get(filters)
        except HistoricoEmpleados.DoesNotExist:
            raise NotFound(
                "No se encontraron Historicos con los criterios especificados.")

        #! Verificar si el objeto historico no es nulo
        if historico is None:
            raise NotFound(
                "No se encontraron Historicos con los criterios especificados.")

        #! Serializar los resultados
        serializer = HistoricoSerializers(historico)

        #! Verificar si el serializador no es nulo
        if serializer is None:
            raise Exception("Error al serializar el historico")

        #! Retornar los resultados
        return Response(serializer.data, status=HTTP_200_OK)