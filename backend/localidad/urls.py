from rest_framework.routers import DefaultRouter
from .views import ProvinciaViewSet, MunicipioViewSet

router = DefaultRouter()
router.register(r"provincia", ProvinciaViewSet, basename="provincia")
router.register(r"municipio", MunicipioViewSet, basename="municipio")
urlpatterns = router.urls
