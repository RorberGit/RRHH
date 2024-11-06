from django.contrib import admin

from .api.models import Antdd, Ne, Pase, Procedencias, AjtVjt, Turno

# Register your models here.
admin.site.register([Procedencias, Antdd, Ne, AjtVjt, Turno, Pase])
