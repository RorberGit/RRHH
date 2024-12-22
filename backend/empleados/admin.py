from django.contrib import admin
from simple_history.admin import SimpleHistoryAdmin

from .models.historico import HistoricoEmpleados
from .models.empleados import Empleados

# Register your models here.


admin.site.register([Empleados, HistoricoEmpleados], SimpleHistoryAdmin)
