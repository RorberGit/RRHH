from django.contrib import admin

from asistencia.api.models import HoraEntradaSalida, RegistroEntradaSalida

# Register your models here.
admin.site.register([RegistroEntradaSalida, HoraEntradaSalida])
