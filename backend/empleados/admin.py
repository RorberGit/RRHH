from django.contrib import admin
from simple_history.admin import SimpleHistoryAdmin

from .models.historico import Historico_Empleados
from .models.empleados import Empleados

# Register your models here.


admin.site.register([Empleados, Historico_Empleados], SimpleHistoryAdmin)
