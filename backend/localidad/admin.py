from django.contrib import admin
from .models import Municipio, Provincia

# Register your models here.
admin.site.register([Municipio, Provincia])
