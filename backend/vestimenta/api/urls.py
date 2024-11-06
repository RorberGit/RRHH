from rest_framework.routers import DefaultRouter

from .views import PantalonView, CamisaView, CalzadoView

router = DefaultRouter()
router.register(r"pants", PantalonView, basename="Talla pantalon")
router.register(r"shirt", CamisaView, basename="Talla camisa")
router.register(r"footwear", CalzadoView, basename="Talla calzado")

urlpatterns = router.urls
