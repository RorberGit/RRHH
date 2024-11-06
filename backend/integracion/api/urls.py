from rest_framework.routers import DefaultRouter

from .views import OrmView, AfpView, DefensaView

router = DefaultRouter()
router.register(r"orm", OrmView, basename="Organizaciones de masa")
router.register(r"afp", AfpView, basename="Afiliaciones políticas")
router.register(r"ued", DefensaView, basename="Ubicación en defensa")

urlpatterns = router.urls
