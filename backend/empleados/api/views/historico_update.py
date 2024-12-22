from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.exceptions import NotFound
from django.db.models import Q

from empleados.api.serializers.historico import HistoricoSerializers
from empleados.models.historico import HistoricoEmpleados


class UpdateView(APIView):
    def put(self, request):
        #! Obtener el historico por empleado_id
        id = request.query_params.get('id')

        #! Iniciar filtro de busqueda
        filters = Q()

        #! Aplicar filtros si existe
        if id:
            filters &= Q(id=id)

        #! Emitir un error si no se encuentra ningun empleado
        if not filters:
            raise NotFound("Criterios de busqueda no especificados.")

        #! Obtener empleados segun filtro establecido
        historico = HistoricoEmpleados.objects.get(filters)

        #! Actualizar el empleado
        serializer = HistoricoSerializers(
            historico, data=request.data, partial=True)

        #! Validar y guardar el nuevo empleado
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
