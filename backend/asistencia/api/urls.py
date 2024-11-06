from rest_framework.routers import DefaultRouter
from django.urls import include, path
from .views import (
    ActualizarSalidaEmpleado,
    CrearEntradaEmpleado,
    HoraEntradaSalidaView,
    RetrieveHoraEntradaSalidaByDay,
    ListRegistroEntradaSalida,
)

router = DefaultRouter()
router.register(r"", HoraEntradaSalidaView, basename="Jornada")

urlpatterns = [
    path(
        "empleados/crear-entrada/",
        CrearEntradaEmpleado.as_view(),
        name="crear_entrada_empleado",
    ),
    path(
        "empleados/<int:nip>/actualizar-salida/",
        ActualizarSalidaEmpleado.as_view(),
        name="actualizar_salida_empleado",
    ),
    path(
        r"timeworkforday/<str:dia_semana>/",
        RetrieveHoraEntradaSalidaByDay.as_view(),
        name="timeworkforday",
    ),
    path(
        "registroentrada/",
        ListRegistroEntradaSalida.as_view(),
        name="Listar Registro Entrada y Salidad",
    ),
    path(r"timework", include(router.urls)),
]
