from django.db import models
from common.models import CommonFields
from empleados.models import Empleados


class RegistroEntradaSalida(CommonFields):
    empleado = models.ForeignKey(Empleados, on_delete=models.CASCADE)
    fecha_y_hora_entrada = models.DateTimeField(
        verbose_name="Fecha y Hora de Entrada", blank=True, null=True, default=None
    )
    fecha_y_hora_salida = models.DateTimeField(
        verbose_name="Fecha y Hora de Salida",
        blank=True,
        null=True,
        default=None,
    )

    def __str__(self):
        return f"{self.empleado.nombre} {self.empleado.apellido_paterno} {self.empleado.apellido_materno}"

    class Meta:
        verbose_name = "Registro de entrada y salida"
        verbose_name_plural = "Registros de entrada y salida"
        ordering = ["created_at"]


class HoraEntradaSalida(CommonFields):
    """Modelo para registrar las horas de entrada y salida"""

    # Crear choice para dia de la semana
    DIAS_SEMANA = [
        ("Lunes", "Lunes"),
        ("Martes", "Martes"),
        ("Miercoles", "Miercoles"),
        ("Jueves", "Jueves"),
        ("Viernes", "Viernes"),
        ("Sabado", "Sabado"),
        ("Domingo", "Domingo"),
    ]

    dia_semana = models.CharField(
        max_length=10, choices=DIAS_SEMANA, default="Lunes")

    hora_entrada = models.TimeField(
        verbose_name="Hora de Entrada", blank=True, null=True, default=None
    )
    hora_salida = models.TimeField(
        verbose_name="Hora de Salida", blank=True, null=True, default=None
    )

    def __str__(self):
        return f"Día de la semana: {self.dia_semana} -- Jornada de trabajo: {
            self.hora_entrada} - {self.hora_salida}"

    class Meta:
        verbose_name = "Hora de entrada y salida"
        verbose_name_plural = "Horas de entrada y salida"
        ordering = ["created_at"]
