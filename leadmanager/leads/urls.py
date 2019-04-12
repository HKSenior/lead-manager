from rest_framework import routers

from .views import LeadViewSet

router = routers.DefaultRouter()
router.register(r'api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
