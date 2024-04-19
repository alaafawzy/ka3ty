from rest_framework import serializers

from hall.models import Hall

from .models import Rate
from hall.serializers import HallSerializer  # Update path to your hall serializer

class RateSerializer(serializers.ModelSerializer):
    hall = HallSerializer(read_only=True)  # Nested hall information

    class Meta:
        model = Rate
        fields = '__all__'  # Include all fields for now (adjust as needed)


class RateCreateSerializer(serializers.Serializer):
    comment = serializers.CharField(required=False, allow_blank=True)
    rate = serializers.DecimalField(max_digits=5, decimal_places=2)