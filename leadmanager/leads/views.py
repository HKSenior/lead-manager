from rest_framework import viewsets, permissions

from .serializers import LeadSerializer


class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serilizer):
        serilizer.save(owner=self.request.user)
