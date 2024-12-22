from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.exceptions import NotFound
from django.db.models import Q

from empleados.models.historico import HistoricoEmpleados


class DeleteView(APIView):
    def delete(self, request):
        #! Obtener el historico por historico_id
        id = request.query_params.get('id')

        #! Iniciar filtro de busqueda
        filters = Q()

        #! Aplicar filtros si existe
        if id:
            filters &= Q(id=id)

        #! Emitir un error si no se encuentra ningun historico
        if not filters:
            raise NotFound("Criterios de busqueda no especificados.")

        #! Obtener historico segun filtro establecido
        historico = HistoricoEmpleados.objects.get(filters)

        #! Eliminar el historico
        historico.delete()
        return Response(status=HTTP_204_NO_CONTENT)