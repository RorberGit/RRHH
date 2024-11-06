from django.db import models
from common.models import CommonFields


class Procedencias(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Procedencia"
        verbose_name_plural = "Procedencias"
        ordering = ["nombre"]


class Antdd(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Antigüedad"
        verbose_name_plural = "Antigüedad"
        ordering = ["nombre"]


class Ne(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Nivel escolar"
        verbose_name_plural = "Niveles escolares"
        ordering = ["nombre"]


class AjtVjt(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Base de alojamiento / Viajante"
        verbose_name_plural = "Base de alojamiento / Viajante"
        ordering = ["nombre"]


class Turno(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Turno"
        verbose_name_plural = "Turnos"
        ordering = ["nombre"]


class Pase(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Pase"
        verbose_name_plural = "Pases"
        ordering = ["nombre"]
