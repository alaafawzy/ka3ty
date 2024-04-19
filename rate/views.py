from rest_framework.generics import CreateAPIView,ListAPIView,GenericAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework import status

from hall.models import Hall

from .models import Rate
from .serializers import RateCreateSerializer, RateSerializer


class RateCreateView(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RateCreateSerializer

    def post(self, request,hall_pk):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # Get the user from the request
        user = request.user
        hall=Hall.objects.get(id=hall_pk)
        if not hall:
            return Response({'error': 'Hall not found'}, status=HTTP_400_BAD_REQUEST)
        if Rate.objects.filter(hall=hall, user=user).exists():
                return Response({'error': 'You have already rated this hall'}, status=HTTP_400_BAD_REQUEST)
        comment=serializer.validated_data['comment']
        rate=serializer.validated_data['rate']
        rate_hall=Rate(user=user,hall=hall,comment=comment,rate=rate)
        rate_hall.save()
        return Response({'user': user.first_name,'hall':hall.id,'comment':comment,'rate':rate}, status=status.HTTP_200_OK)

class RateListByHallView(ListAPIView):
    serializer_class = RateSerializer
    permission_classes = [IsAuthenticated]  # Optional authentication

    def get_queryset(self):
        hall_pk = self.kwargs.get('hall_pk')
        try:
            hall = Hall.objects.get(pk=hall_pk)
            return Rate.objects.filter(hall=hall)
        except Hall.DoesNotExist:
            return Rate.objects.none()  # Return an empty queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        if not queryset.exists():
            return Response({'error': 'Hall not found or has no rates'}, status=HTTP_404_NOT_FOUND)
        return Response(serializer.data)
    
class RateView(RetrieveAPIView, UpdateAPIView, DestroyAPIView):
    queryset = Rate.objects.all()
    serializer_class = RateSerializer

class RateListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RateSerializer

    def get_queryset(self):
        user = self.request.user
        return Rate.objects.all()
