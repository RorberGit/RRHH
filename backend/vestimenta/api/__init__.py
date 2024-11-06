from .models import Pantalon, Camisa, Calzado
from .serialiers import PantalonSerializer, CamisaSerializer, CalzadoSerializer
from .views import PantalonView, CamisaView, CalzadoView

__all__ = [
    "Pantalon",
    "Camisa",
    "Calzado",
    "PantalonSerializer",
    "CamisaSerializer",
    "CalzadoSerializer",
    "PantalonView",
    "CamisaView",
    "CalzadoView",
]
