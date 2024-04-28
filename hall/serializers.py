from rest_framework import serializers

from .models import Hall, HallAttachments

class HallSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hall
        fields = ('id', 'name', 'location', 'max_visitors', 'price', 'area', 'hall_number', 'max_meal')
