from django.contrib import admin

from .api.models import Orm, Afp, Defensa

# Register your models here.
admin.site.register([Orm, Afp, Defensa])
