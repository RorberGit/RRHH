from django.urls import path

from empleados.api.views.historico_listing import ListingView
from empleados.api.views.historico_retrieve import RetrieveView
from empleados.api.views.historico_create import CreateView
from empleados.api.views.historico_update import UpdateView
from empleados.api.views.historico_delete import DeleteView

urlpatterns = [
    path("listing/", ListingView.as_view(),  name="Listing"),
    path("retrieve/", RetrieveView.as_view(), name="Retrieve"),
    path("create/", CreateView.as_view(), name="Create"),
    path("update/", UpdateView.as_view(), name="Update"),
    path("delete/", DeleteView.as_view(), name="Delete"),
]
