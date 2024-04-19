from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated  # Optional authentication
from rest_framework.response import Response

from .models import Hall
from .serializers import HallSerializer


class HallListView(ListAPIView):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
    # Add permission classes for authentication if needed
    # permission_classes = [IsAuthenticated]


class HallDetailView(RetrieveAPIView, UpdateAPIView, DestroyAPIView):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
    # Add permission classes for authentication if needed
    # permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        response = super().delete(request, *args, **kwargs)
        if response.status_code == 204:
            return Response(status=response.status_code)
        return response


class HallCreateView(CreateAPIView):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
    # Add permission classes for authentication if needed
    # permission_classes = [IsAuthenticated]
