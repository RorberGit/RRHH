from django.db import models
from common.models import CommonFields


class Orm(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Organización de masa"
        verbose_name_plural = "Organizaciones de masas"
        ordering = ["nombre"]


class Afp(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Afiliación política"
        verbose_name_plural = "Afiliacións políticas"
        ordering = ["nombre"]


class Defensa(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Ubicación en la defensa"
        verbose_name_plural = "Ubicaciones en la defensa"
        ordering = ["nombre"]
