from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.exceptions import NotFound, NotAcceptable
from django.db.models import Q

from empleados.api.serializers.share_serializers import ResumenEmpleadoSerializers
from empleados.models.empleados import Empleados


class RetrieveView(APIView):
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
        return Response(serializer.data, status=HTTP_200_OK)
