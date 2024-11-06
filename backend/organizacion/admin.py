from django.contrib import admin

from .api.models import Especialidades, Proyectos, AreaDpto, Cargos

# Register your models here.
admin.site.register([Proyectos, AreaDpto, Cargos, Especialidades])
