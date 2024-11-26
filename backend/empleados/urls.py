from django.urls import path

from . import views

urlpatterns = [
    path("listing/", views.ListEmpleados.as_view(), name="List"),
    path("retrieve/", views.RetrieveEmpleados.as_view(), name="Retrieve"),
    path("getone/",views.GetOneEmpleado.as_view(), name="Optener un empleado"),
    path("create/", views.CreateEmpleados.as_view(), name="Create"),
    path("update/<pk>/", views.UpdateEmpleados.as_view(), name="Update"),
    path("delete/<pk>", views.DeleteEmpleados.as_view(), name="Delete"),    
    path("max/", views.MaxNIP.as_view(), name="MAX"),    
]
