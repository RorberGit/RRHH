from django.db import models
from common.models import CommonFields

# Create your models here.


class Provincia(CommonFields):
    nombre = models.CharField("Nombre", max_length=200, unique=True)

    class Meta:
        ordering = ["nombre"]

    def __str__(self):
        return f"{self.nombre}"


class Municipio(CommonFields):
    nombre = models.CharField("Nombre", max_length=200)
    provincia = models.ForeignKey(Provincia, on_delete=models.CASCADE)

    class Meta:
        ordering = ["nombre"]

    def __str__(self):
        return f"{self.nombre} (Provincia: {self.provincia})"
