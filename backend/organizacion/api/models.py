from django.db import models
from common.models import CommonFields


class Proyectos(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Proyecto"
        verbose_name_plural = "Proyectos"
        ordering = ["nombre"]


class AreaDpto(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)
    jefe = models.OneToOneField(
        "empleados.empleados",
        on_delete=models.SET_NULL,
        verbose_name="Jefe inmediato",
        blank=True,
        null=True,
        default=None,
    )

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Area o departamento"
        verbose_name_plural = "Areas o departamentos"
        ordering = ["nombre"]


class Cargos(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Cargo"
        verbose_name_plural = "Cargos"
        ordering = ["nombre"]


class Especialidades(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Especialidad"
        verbose_name_plural = "Especialidades"
        ordering = ["nombre"]
