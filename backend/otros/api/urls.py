from rest_framework.routers import DefaultRouter

from .views import AntddView, PaseView, ProcedenciasView, NeView, AjtVjtView, TurnoView

router = DefaultRouter()
router.register(r"procedence", ProcedenciasView, basename="Procedencias")
router.register(r"antique", AntddView, basename="Antigüedad")
router.register(r"school", NeView, basename="Nivel escolar")
router.register(r"ajtvjt", AjtVjtView, basename="Base de alojamiento / Viajante")
router.register(r"turn", TurnoView, basename="Turno")
router.register(r"pass", PaseView, basename="Pase")


urlpatterns = router.urls
