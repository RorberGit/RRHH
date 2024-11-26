from datetime import datetime

from django.db.models import Q

from rest_framework import status, viewsets
from rest_framework.exceptions import NotFound, ParseError
from rest_framework.response import Response
from rest_framework.views import APIView

from empleados.models.empleados import Empleados
from empleados.serializers import EmpleadosSerializers

from .models import HoraEntradaSalida, RegistroEntradaSalida
from .serialiers import (
    CreateRegistroEntradaSalidaSerializer,
    HoraEntradaSalidaSerializer,
    ListRegistroEntradaSalidaSerializer,
)


class CrearEntradaEmpleado(APIView):
    def post(self, request):
        """
        A function to create a new entry for an employee based on the provided NIP.
        It saves the employee's ID, current date, and time of entry, and returns a response.
        """
        nip = request.data.get("nip")

        #! Recuperar empleador si existe o emitir una exención
        try:
            empleado = Empleados.objects.get(nip=nip)
        except Empleados.DoesNotExist as e:
            raise NotFound(f"Empleado con NIP: {nip} no encontrado") from e

        #! Cambiar el estado del empleado
        serializer_empleado = EmpleadosSerializers(
            empleado, {"estado": "ENTRADA"}, partial=True
        )

        #! Si todo esta bien guardar los cambios
        if serializer_empleado.is_valid():
            serializer_empleado.save()

        #! Guardar la fecha de entrada del emleado especifico
        data = {
            "empleado": empleado.id,
            "fecha_y_hora_entrada": datetime.now(),
        }

        serializer = CreateRegistroEntradaSalidaSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActualizarSalidaEmpleado(APIView):
    def get(self, _, nip):
        """
        Retrieves the latest entry for an employee based on their NIP.

        Args:
            _: The first positional argument is ignored.
            nip (str): The NIP of the employee.

        Returns:
            Response: The serialized data of the latest entry for the employee.
        """
        empleado = Empleados.objects.get(nip=nip)

        registro_entrada = RegistroEntradaSalida.objects.filter(
            empleado_id=empleado.id, fecha_y_hora_salida=None
        ).latest("fecha_y_hora_entrada")

        serializer = ListRegistroEntradaSalidaSerializer(registro_entrada)

        return Response(serializer.data)

    def put(self, _, nip):
        """
        Updates the 'fecha_y_hora_salida' field of the latest 'RegistroEntradaSalida' object for a given employee.

        Args:
            _: The first positional argument is ignored.
            nip (str): The NIP of the employee.

        Returns:
            Response: If the update is successful, returns the serialized data of the updated 'RegistroEntradaSalida' object with a status code of 200 (OK). If the update fails, returns the serializer errors with a status code of 400 (Bad Request).
        """
        empleado = Empleados.objects.get(nip=nip)

        serializer_empleado = EmpleadosSerializers(
            empleado, {"estado": "SALIDA"}, partial=True
        )

        if serializer_empleado.is_valid():
            serializer_empleado.save()
            print(serializer_empleado.data)
        else:
            print(serializer_empleado.errors)

        registro_entrada = RegistroEntradaSalida.objects.filter(
            empleado_id=empleado.id, fecha_y_hora_salida=None
        ).latest("fecha_y_hora_entrada")

        serializer = CreateRegistroEntradaSalidaSerializer(
            registro_entrada, data={"fecha_y_hora_salida": datetime.now()}, partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HoraEntradaSalidaView(viewsets.ModelViewSet):
    serializer_class = HoraEntradaSalidaSerializer
    queryset = HoraEntradaSalida.objects.all()


# Recuperar entrada y salida de empleados según día de la semana proporcionado
class RetrieveHoraEntradaSalidaByDay(APIView):
    def get(self, _, dia_semana):
        """
        Retrieves the latest entry for an the Hora Entrada and Salida based on their dia de semana.
        """
        try:
            entrada_salida = HoraEntradaSalida.objects.get(
                dia_semana=dia_semana)
        except HoraEntradaSalida.DoesNotExist as e:
            raise NotFound(
                f"Registro no encontrado para día de semana: {dia_semana}"
            ) from e

        serializer = HoraEntradaSalidaSerializer(entrada_salida)

        return Response(serializer.data)


#! Obtener el registro de entrada o salidad de los empleados
class ListRegistroEntradaSalida(APIView):
    def get(self, request):
        """
        Mostrar lista de Registro de Entrada y Salidad de Empleados
        """
        #! Obtener los query params para la busqueda
        nip = request.query_params.get("nip")
        proyecto = request.query_params.get("proyecto")
        fecha_entrada = request.query_params.get("fecha_entrada")

        #! Filtros de busqueda vacios
        filtros = Q()

        #! Crear filtros por cada parametro obtenido
        if nip:
            filtros &= Q(empleado__nip=nip)

        if proyecto:
            filtros &= Q(empleado__proyecto__nombre=proyecto)

        if fecha_entrada:
            try:
                fecha_entrada_date = datetime.strptime(
                    fecha_entrada, "%Y-%m-%d")
                filtros &= Q(fecha_y_hora_entrada__date=fecha_entrada_date)
            except ValueError:
                raise ParseError(
                    "La fecha de entrada debe tener el formato YYYY-MM-DD")

        #! Si hay filtros, realizar la busqueda sino devolver todos en orden desendente
        result = RegistroEntradaSalida.objects.filter(
            filtros).order_by("-updated_at")

        #! Si no hay resultados de la busqueda
        if not result.exists():
            raise NotFound("Sin registros localizados")

        #! Serializar los resultados, con many=True para retornar una lista de objetos relacionados
        serializer = ListRegistroEntradaSalidaSerializer(result, many=True)

        #! Retornar los resultados
        return Response(serializer.data)
