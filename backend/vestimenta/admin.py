from django.contrib import admin

from .api.models import Calzado, Camisa, Pantalon

# Register your models here.
admin.site.register([Pantalon, Camisa, Calzado])
