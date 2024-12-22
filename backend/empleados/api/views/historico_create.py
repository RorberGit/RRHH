from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED

from empleados.api.serializers.historico import HistoricoSerializers

class CreateView(APIView):
    """Insertar nuevo registro en el historico
    """
    def post(self, request):
        #! Crear el serializador con los datos actualizados
        serializer = HistoricoSerializers(data=request.data)

        #! Validar y guardar el nuevo empleado
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
