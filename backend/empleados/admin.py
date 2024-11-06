from django.contrib import admin
from simple_history.admin import SimpleHistoryAdmin
from .models import Empleados

# Register your models here.


admin.site.register(Empleados, SimpleHistoryAdmin)
