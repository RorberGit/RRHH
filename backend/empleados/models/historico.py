from django.db import models
from datetime import date
from common.models import CommonFields
from empleados.models.empleados import Empleados


class Historico_Empleados(CommonFields):
    empleado_id = models.ForeignKey(
        Empleados,
        on_delete=models.CASCADE,
        verbose_name="Relación con empledos",
    )
    fecha = models.DateField(
        verbose_name="Fecha",
        null=True, blank=True, default=date.today
    )
    descripcion = models.TextField(
        verbose_name="Descrición"
    )

    def __str__(self):
        return f"{self.empleado_id.nombre} {self.empleado_id.apellido_paterno} {self.empleado_id.apellido_materno}"

    class Meta:
        verbose_name = "Historico de empleado"
        verbose_name_plural = "Historico de empleados"
        ordering = ["created_at"]
