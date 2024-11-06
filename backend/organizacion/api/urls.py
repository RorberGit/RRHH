from rest_framework.routers import DefaultRouter

from .views import EspecialidadesView, ProyectosView, AreaDptoView, CargosView

router = DefaultRouter()
router.register(r"projects", ProyectosView, basename="Proyectos")
router.register(r"areadpto", AreaDptoView, basename="Area o departamento")
router.register(r"positions", CargosView, basename="Cargos")
router.register(r"specialties", EspecialidadesView, basename="Especialidades")

urlpatterns = router.urls
