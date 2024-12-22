from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED

from django.db.models import Max

from empleados.models.empleados import Empleados
from empleados.serializers import EmpleadosSerializers


class CreateView(APIView):
    """Crear nuevo registro de empleado
    """
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        #! Obtener el último número de nip existente
        last_nip = Empleados.objects.aggregate(
            max_number=Max("nip"))["max_number"]

        #! Si no hay empleados, comenzamos desde 1
        if last_nip is None:
            last_nip = 0

        #! Asignar el nuevo nip al siguiente número máximo
        request.data['nip'] = last_nip + 1

        #! Crear el serializador con los datos actualizados
        serializer = EmpleadosSerializers(data=request.data)

        #! Validar y guardar el nuevo empleado
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
