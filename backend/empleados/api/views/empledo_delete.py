from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.exceptions import NotFound, ValidationError

from empleados.models.empleados import Empleados


class DeleteView(APIView):
    """Vista para eliminar un Empleados
    utilizando query params
    """

    def delete(self, request):
        id = request.query_params.get('id')

        if not id:
            raise ValidationError("ID de empleado no proporcionado")

        try:
            empleado = Empleados.objects.get(id=id)
            empleado.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Empleados.DoesNotExist:
            raise NotFound("Empleado no encontrado")
