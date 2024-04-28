from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated  # Optional authentication
from rest_framework.response import Response
from rate.models import Rate
from .models import *
from .serializers import HallSerializer


# class HallListView(ListAPIView):
#     queryset = Hall.objects.all()
#     serializer_class = HallSerializer
    
class HallListView(APIView):
    def get(self, request):

        halls = Hall.objects.all()  # Access related manager directly
        hall_info={}
        print(halls)
        data=[]
        for hall in halls:
            hall_info['id']=hall.id
            hall_info['name']=hall.name
            hall_info['location']=hall.location
            hall_info['max_visitors']=hall.max_visitors
            hall_info['price']=hall.price
            hall_info['area']=hall.area
            hall_info['hall_number']=hall.hall_number
            hall_info['max_meal']=hall.max_meal
            attachments=HallAttachments.objects.filter(hall=hall.id)
            attachments_url=[]
            for attach in attachments:
                url='/media/'+attach.file.name
                attachments_url.append(url)
            hall_info['attachments']=attachments_url
            data.append(hall_info)
            hall_info={}
        print(data)
        return Response(data)

class HallDetailView(APIView):
    def get(self, request, pk):
        """
        Retrieve a specific Hall object based on the primary key (pk) in the URL.
        Optionally modify the retrieved data before returning the response.
        """
        
        try:
            hall_info={}
            hall = Hall.objects.get(pk=pk)
            hall_info['id']=hall.id
            hall_info['name']=hall.name
            hall_info['location']=hall.location
            hall_info['max_visitors']=hall.max_visitors
            hall_info['price']=hall.price
            hall_info['area']=hall.area
            hall_info['hall_number']=hall.hall_number
            hall_info['max_meal']=hall.max_meal
            attachments=HallAttachments.objects.filter(hall=hall.id)
            attachments_url=[]
            for attach in attachments:
                url='/media/'+attach.file.name
                attachments_url.append(url)
            hall_info['attachments']=attachments_url
            
            cur_rate={}
            rates=Rate.objects.filter(hall=hall.id)
            all_rate=[]
            for rate in rates:
                cur_rate['comment']=rate.comment
                cur_rate['rate']=rate.rate
                cur_rate['user']=rate.user.first_name+rate.user.last_name
                all_rate.append(cur_rate)
            hall_info['comments']=all_rate
            
            cur_rate={}
        except Hall.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(hall_info)

    def put(self, request, pk):
        """
        Update a Hall object with the provided data in the request body.
        """

        try:
            hall = Hall.objects.get(pk=pk)
        except Hall.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = HallSerializer(hall, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        """
        Partially update a Hall object with the provided data in the request body.
        """

        try:
            hall = Hall.objects.get(pk=pk)
        except Hall.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = HallSerializer(hall, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """
        Delete a Hall object based on the primary key (pk) in the URL.
        """

        try:
            hall = Hall.objects.get(pk=pk)
        except Hall.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        hall.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class HallCreateView(CreateAPIView):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
    # Add permission classes for authentication if needed
    # permission_classes = [IsAuthenticated]
