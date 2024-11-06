from django.db import models
from common.models import CommonFields


class Pantalon(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Talla pantalón"
        verbose_name_plural = "Tallas pantalones"
        ordering = ["nombre"]

class Camisa(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Talla camisa"
        verbose_name_plural = "Tallas camisas"
        ordering = ["nombre"]

class Calzado(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Talla calzado"
        verbose_name_plural = "Tallas calzados"
        ordering = ["nombre"]
