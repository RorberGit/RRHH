from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, ValidationError

from empleados.models.empleados import Empleados
from empleados.serializers import EmpleadosSerializers


class UpdateView(APIView):
    """Actualizar empleado"""

    def put(self, request):
        empleado_id = request.query_params.get('id')

        if not empleado_id:
            raise ValidationError("ID de empleado no proporcionado")

        try:
            empleado = Empleados.objects.get(id=empleado_id)
        except Empleados.DoesNotExist:
            raise NotFound("Empleado no encontrado")

        serializer = EmpleadosSerializers(
            empleado, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
