from rest_framework import serializers

from .models import Hall, HallAttachments

class HallAttachmentSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()  # Add a URL field for attachments

    class Meta:
        model = HallAttachments
        fields = ('id', 'file', 'url')

    def get_url(self, obj):
        request = self.context.get('request')
        if obj.file and request.is_secure:  # Check for secure request (HTTPS)
            return request.build_absolute_uri(obj.file.url)
        else:
            return None  # Return None for non-existent or non-secure files

class HallSerializer(serializers.ModelSerializer):
    hall_attachments = HallAttachmentSerializer(source='hall_attachments_set', many=True, read_only=True)  # Nested serializer for attachments

    class Meta:
        model = Hall
        fields = ('id', 'name', 'location', 'max_visitors', 'price', 'area', 'hall_number', 'max_meal', 'hall_attachments')
