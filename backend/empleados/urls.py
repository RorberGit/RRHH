from django.urls import path, include

from empleados.api.views.empleado_listing import ListingView
from empleados.api.views.empleado_retrieve import RetrieveView
from empleados.api.views.empleado_create import CreateView
from empleados.api.views.empleado_update import UpdateView
from empleados.api.views.empledo_delete import DeleteView

urlpatterns = [
    path("listing/", ListingView.as_view(),
         name="Lista completa de empleados"),
    path("retrieve/", RetrieveView.as_view(), name="Recuperar un empleado"),
    path("create/", CreateView.as_view(), name="Crear nuevo empleado"),
    path("update/", UpdateView.as_view(),
         name="Actualizar registro de empleado"),
    path("delete/", DeleteView.as_view(), name="Eliminar un empleado"),
    path("historic/", include("empleados.api.urls.historico"),
         name="Historico de Empledo"),
]
