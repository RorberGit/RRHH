from datetime import date

from django.db import models
from simple_history.models import HistoricalRecords

from common.models import CommonFields

from localidad.models import Municipio, Provincia
from otros.api.models import Pase, Procedencias, Antdd, Ne, AjtVjt, Turno
from vestimenta.api.models import Calzado, Camisa, Pantalon

from .api.fields_chocices import (
    COLOR_PIEL_CHOICE,
    SEXO_CHOISE,
    ENTRADA_SALIDA_CHOICE,
    ESTADO_VIENDA_CHOICE,
)

# Create your models here.


class Empleados(CommonFields):
    nip = models.IntegerField(
        "Número de Identificación Personal", blank=True, null=True, unique=True
    )
    nombre = models.CharField("Nombre", max_length=150)
    apellido_paterno = models.CharField("Apellido Paterno", max_length=100)
    apellido_materno = models.CharField("Apellido Materno", max_length=100)
    ci = models.CharField(
        "Número de Identidad",
        max_length=11,
        blank=True,
        null=True,
        default=None,
        unique=True,
    )
    sexo = models.CharField(
        "Sexo", max_length=1, choices=SEXO_CHOISE, null=True, default="M"
    )
    color_piel = models.CharField(
        "Color de la piel",
        max_length=1,
        choices=COLOR_PIEL_CHOICE,
        null=True,
        default="B",
    )
    telefono = models.CharField(
        "Teléfono", max_length=30, null=True, blank=True, default=None
    )
    ne = models.ForeignKey(
        Ne,
        on_delete=models.SET_NULL,
        verbose_name="Nivel Escolar",
        blank=True,
        null=True,
        default=None,
    )
    especialidad = models.ForeignKey(
        "organizacion.Especialidades",
        on_delete=models.SET_NULL,
        verbose_name="Especialidad",
        blank=True,
        null=True,
        default=None,
    )
    ag = models.CharField(
        "Año de graduado", max_length=4, null=True, blank=True, default=None
    )
    procedencia = models.ForeignKey(
        Procedencias,
        on_delete=models.SET_NULL,
        verbose_name="Procedencia",
        blank=True,
        null=True,
        default=None,
    )
    no = models.CharField("No", max_length=20, null=True, blank=True, default=None)
    calle = models.CharField(
        "Calle", max_length=250, null=True, blank=True, default=None
    )
    entre = models.CharField(
        "Entre", max_length=250, null=True, blank=True, default=None
    )
    y = models.CharField("Y", max_length=250, null=True, blank=True, default=None)
    edif = models.CharField(
        "Edificio", max_length=20, null=True, blank=True, default=None
    )
    apto = models.CharField(
        "Apartamento", max_length=20, null=True, blank=True, default=None
    )
    poblado_barrio = models.CharField(
        "Barrio/Poblado", max_length=250, null=True, blank=True, default=None
    )
    municipio = models.ForeignKey(
        Municipio,
        on_delete=models.DO_NOTHING,
        verbose_name="Municipio",
        null=True,
        blank=True,
        default=None,
    )
    provincia = models.ForeignKey(
        Provincia,
        on_delete=models.DO_NOTHING,
        verbose_name="Provincia",
        null=True,
        blank=True,
        default=None,
    )
    nuevo_ingreso = models.BooleanField(
        "Nuevo ingreso", blank=True, null=True, default=True
    )
    proyecto = models.ForeignKey(
        "organizacion.Proyectos",
        on_delete=models.SET_NULL,
        verbose_name="Proyecto",
        blank=True,
        null=True,
        default=None,
    )
    areadpt = models.ForeignKey(
        "organizacion.AreaDpto",
        on_delete=models.SET_NULL,
        verbose_name="Area o departamento",
        blank=True,
        null=True,
        default=None,
    )
    cargo = models.ForeignKey(
        "organizacion.Cargos",
        on_delete=models.SET_NULL,
        verbose_name="Cargo",
        blank=True,
        null=True,
        default=None,
    )
    fecha_cc = models.DateField(
        "Fecha de contrato en el cargo", null=True, blank=True, default=date.today
    )
    antdd = models.ForeignKey(
        Antdd,
        verbose_name="Antigüedad",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        default=None,
    )
    cpt = models.BooleanField(
        "Cobra por tarjeta", default=False, null=True, blank=False
    )
    turno = models.ForeignKey(
        Turno,
        on_delete=models.SET_NULL,
        verbose_name="Turno",
        blank=True,
        null=True,
        default=None,
    )
    pase = models.ForeignKey(
        Pase,
        on_delete=models.SET_NULL,
        verbose_name="Pase (RTD)",
        blank=True,
        null=True,
        default=None,
    )
    fecha_captado = models.DateField(
        "Fecha de captado", null=True, blank=True, default=date.today
    )
    afp = models.JSONField(
        verbose_name="Afiliación política",
        blank=True,
        null=True,
        default=None,
    )
    orm = models.JSONField(
        verbose_name="Organizaciones de masa",
        blank=True,
        null=True,
        default=None,
    )
    defensa = models.JSONField(
        verbose_name="Defensa",
        blank=True,
        null=True,
        default=None,
    )
    pantalon = models.ForeignKey(
        Pantalon,
        on_delete=models.SET_NULL,
        verbose_name="Talla pantalón",
        blank=True,
        null=True,
        default=None,
    )
    camisa = models.ForeignKey(
        Camisa,
        on_delete=models.SET_NULL,
        verbose_name="Talla Camisa / Blusa",
        blank=True,
        null=True,
        default=None,
    )
    calzado = models.ForeignKey(
        Calzado,
        on_delete=models.SET_NULL,
        verbose_name="Talla Calzado",
        blank=True,
        null=True,
        default=None,
    )
    estado_vivienda = models.CharField(
        "Estado de la vivienda",
        max_length=1,
        choices=ESTADO_VIENDA_CHOICE,
        blank=True,
        null=True,
        default="B",
    )
    propietario = models.BooleanField(
        "Propietario", default=False, null=True, blank=True
    )
    vivienda_vinculada = models.BooleanField(
        "Vivienda vinculada", default=False, null=True, blank=False
    )
    ajtvjt = models.ForeignKey(
        AjtVjt,
        on_delete=models.SET_NULL,
        verbose_name="Base de alojamiento / Viajante",
        blank=True,
        null=True,
        default=None,
    )
    aptoabg = models.CharField(
        "Apartamento de albergado", max_length=150, blank=True, null=True, default=None
    )
    bloque = models.CharField(
        "Bloque", max_length=150, blank=True, null=True, default=None
    )
    cuarto = models.CharField(
        "Cuarto", max_length=150, blank=True, null=True, default=None
    )
    po = models.CharField(
        "Parada omnibus", max_length=150, blank=True, null=True, default=None
    )
    ruta = models.CharField("Ruta", max_length=150, blank=True, null=True, default=None)
    pantry = models.CharField(
        "Pantry", max_length=150, blank=True, null=True, default=None
    )
    foto = models.TextField("Foto", null=True, blank=True)
    estado = models.CharField(
        "Entrada o Salida",
        max_length=10,
        choices=ENTRADA_SALIDA_CHOICE,
        null=True,
        default="SALIDA",
    )
    is_active = models.BooleanField(
        verbose_name="Si esta activo", blank=True, null=True, default=True
    )

    history = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.nombre} {self.apellido_paterno} {self.apellido_materno}"
