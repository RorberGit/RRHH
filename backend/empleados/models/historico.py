from django.db import models
from datetime import date
from common.models import CommonFields
from empleados.models.empleados import Empleados


class HistoricoEmpleados(CommonFields):
    estado = models.CharField(verbose_name="Estado", max_length=20)

    id_empleado = models.ForeignKey(
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

    creado_por = models.CharField(
        verbose_name="Nombre Completo quien crea el registro", max_length=200)

    def __str__(self):
        return f"{self.IdEmpleado.nombre} {self.IdEmpleado.apellido_paterno} {self.IdEmpleado.apellido_materno}"

    class Meta:
        verbose_name = "Historico de empleado"
        verbose_name_plural = "Historico de empleados"
        ordering = ["created_at"]
