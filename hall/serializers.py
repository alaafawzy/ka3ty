from rest_framework import serializers

from .models import Hall


class HallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = '__all__'  # Include all fields for now (adjust as needed)