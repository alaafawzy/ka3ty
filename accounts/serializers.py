from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate, logout, login

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, required=True)
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2')

    def validate(self, attrs):
        password = attrs['password']
        password2 = attrs['password2']
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords do not match.'})
        return attrs

class LoginSerializer(serializers.Serializer):
    username_or_email = serializers.CharField(required=True)
    password = serializers.CharField(style={'input_type': 'password'}, required=True)

    def validate(self, attrs):
        username_or_email = attrs['username_or_email']
        password = attrs['password']

        # Authenticate using either username or email
        user = authenticate(username=username_or_email, password=password)
        if not user:
            raise serializers.ValidationError({'detail': 'Invalid credentials.'})

        attrs['user'] = user
        return attrs